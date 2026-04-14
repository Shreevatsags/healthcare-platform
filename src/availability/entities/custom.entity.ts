import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CustomAvailability {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doctorId: number;

  @Column()
  date: string; // 2026-04-20

  @Column("json")
  slots: { startTime: string; endTime: string }[];
}