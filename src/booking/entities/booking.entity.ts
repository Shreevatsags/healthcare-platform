import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doctorId: number;

  @Column()
  patientId: number;

  @Column()
  slotStart: Date;

  @Column()
  slotEnd: Date;
}