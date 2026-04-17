import { Injectable } from '@nestjs/common';
import { BookingService } from '../booking/booking.service';

@Injectable()
export class SlotsService {
  constructor(private bookingService: BookingService) {}

  async generateSlots(body: any) {
    const { doctorId, date, availability } = body;

    const slots: { start: Date; end: Date }[] = []; // ✅ FIXED

    let start = new Date(`${date}T${availability.startTime}`);
    const end = new Date(`${date}T${availability.endTime}`);

    while (start < end) {
      const slotEnd = new Date(start.getTime() + availability.slotDuration * 60000);

      if (slotEnd > end) break;

      slots.push({
        start: new Date(start),
        end: slotEnd,
      });

      start = slotEnd;
    }

    const bookings = await this.bookingService.getByDoctorAndDate(
      doctorId,
      date,
    );

    const now = new Date();

    return slots.filter(slot => {
      const slotStart = new Date(slot.start);
      const slotEnd = new Date(slot.end);

      if (slotStart <= now) return false;

      const isBooked = bookings.some(b => {
        const bStart = new Date(b.slotStart);
        const bEnd = new Date(b.slotEnd);

        return slotStart < bEnd && slotEnd > bStart;
      });

      return !isBooked;
    });
  }
}