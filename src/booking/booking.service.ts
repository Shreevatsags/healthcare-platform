import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
  private bookings: any[] = [];

  create(data: any) {
    this.bookings.push(data);
    return { message: 'Booking created', data };
  }

  getByDoctorAndDate(doctorId: number, date: string) {
    return this.bookings.filter(b => {
      return (
        b.doctorId == doctorId &&
        new Date(b.slotStart).toISOString().slice(0, 10) === date
      );
    });
  }
}