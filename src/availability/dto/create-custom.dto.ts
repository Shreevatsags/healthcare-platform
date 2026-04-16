export class CreateCustomDto {
  date: string;
  slots: { startTime: string; endTime: string }[];
}