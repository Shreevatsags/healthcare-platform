import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RecurringAvailability {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doctorId: number;

  @Column()
  day: string; // MONDAY, TUESDAY

  @Column("json")
  slots: { startTime: string; endTime: string }[];
}