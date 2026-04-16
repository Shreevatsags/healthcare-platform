export class CreateRecurringDto {
  day: string;
  slots: { startTime: string; endTime: string }[];
}