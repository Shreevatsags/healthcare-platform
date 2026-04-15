import { IsNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  doctorId: number;

  @IsNumber()
  patientId: number;

  @IsString()
  date: string;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;
}