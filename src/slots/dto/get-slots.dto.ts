export class GetSlotsDto {
  doctorId: number;
  date: string;

  availability: {
    startTime: string;
    endTime: string;
    slotDuration: number;
  };

  bookings?: {
    slotStart: string;
    slotEnd: string;
  }[];
}