import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AvailabilityController } from './availability.controller';
import { AvailabilityService } from './availability.service';

import { RecurringAvailability } from './entities/recurring.entity';
import { CustomAvailability } from './entities/custom.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RecurringAvailability,
      CustomAvailability,
    ]),
  ],
  controllers: [AvailabilityController],
  providers: [AvailabilityService],
  exports: [AvailabilityService], // optional (for future use)
})
export class AvailabilityModule {}