import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() body: any) {
    return this.bookingService.create(body); // ✅ FIXED
  }

  @Get()
  getByDoctorAndDate(
    @Query('doctorId') doctorId: number,
    @Query('date') date: string,
  ) {
    return this.bookingService.getByDoctorAndDate(doctorId, date); // ✅ FIXED
  }
}