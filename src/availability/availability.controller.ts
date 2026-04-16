import { Controller, Post, Get, Body, Req, Query } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { CreateRecurringDto } from './dto/create-recurring.dto';
import { CreateCustomDto } from './dto/create-custom.dto';

@Controller('doctor/availability')
export class AvailabilityController {
  constructor(private service: AvailabilityService) {}

  @Post('recurring')
  setRecurring(@Req() req, @Body() dto: CreateRecurringDto) {
    return this.service.setRecurring(1, dto); // temporary doctorId
  }

  @Post('custom')
  setCustom(@Req() req, @Body() dto: CreateCustomDto) {
    return this.service.setCustom(1, dto);
  }

  @Get()
  getAvailability(@Query('date') date: string) {
    return this.service.getAvailability(1, date);
  }
}