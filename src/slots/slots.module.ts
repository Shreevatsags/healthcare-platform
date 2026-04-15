import { Module } from '@nestjs/common';
import { SlotsController } from './slots.controller';
import { SlotsService } from './slots.service';
import { BookingModule } from '../booking/booking.module'; // ✅ IMPORT

@Module({
  imports: [BookingModule], // ✅ ADD THIS
  controllers: [SlotsController],
  providers: [SlotsService],
})
export class SlotsModule {}