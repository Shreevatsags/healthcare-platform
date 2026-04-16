import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RecurringAvailability } from './entities/recurring.entity';
import { CustomAvailability } from './entities/custom.entity';

import { CreateRecurringDto } from './dto/create-recurring.dto';
import { CreateCustomDto } from './dto/create-custom.dto';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectRepository(RecurringAvailability)
    private recurringRepo: Repository<RecurringAvailability>,

    @InjectRepository(CustomAvailability)
    private customRepo: Repository<CustomAvailability>,
  ) {}

  // ✅ Save recurring
  async setRecurring(doctorId: number, dto: CreateRecurringDto) {
    this.validateSlots(dto.slots);

    return this.recurringRepo.save({
      doctorId,
      ...dto,
    });
  }

  // ✅ Save custom override
  async setCustom(doctorId: number, dto: CreateCustomDto) {
    this.validateSlots(dto.slots);

    return this.customRepo.save({
      doctorId,
      ...dto,
    });
  }

  // ✅ Get availability (override logic)
  async getAvailability(doctorId: number, date: string) {
    const custom = await this.customRepo.findOne({
      where: { doctorId, date },
    });

    if (custom) return custom;

    const day = new Date(date).toLocaleString("en-US", {
      weekday: "long",
    }).toUpperCase();

    return this.recurringRepo.findOne({
      where: { doctorId, day },
    });
  }

  // ❌ Prevent overlapping slots
  validateSlots(slots: any[]) {
    slots.sort((a, b) => a.startTime.localeCompare(b.startTime));

    for (let i = 1; i < slots.length; i++) {
      if (slots[i].startTime < slots[i - 1].endTime) {
        throw new BadRequestException("Time slots overlap");
      }
    }
  }
}