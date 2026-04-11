import { Injectable } from '@nestjs/common';
type Doctor = {
  userId: number;
  name: string;
  specialization: string;
  experience: number;
  hospital: string;
};

@Injectable()
export class DoctorService {
  private doctors: Doctor[] = []; // ✅ FIXED

  createOrUpdate(userId: number, dto: any) {
    const existing = this.doctors.find((d) => d.userId === userId);

    if (existing) {
      Object.assign(existing, dto);
      return { message: 'Doctor profile updated', data: existing };
    }

    const doctor: Doctor = {
      userId,
      ...dto,
    };

    this.doctors.push(doctor);
    return { message: 'Doctor profile created', data: doctor };
  }

  findAll() {
    return this.doctors;
  }

  findBySpecialization(specialization: string) {
    return this.doctors.filter(
      (d) =>
        d.specialization.toLowerCase() === specialization.toLowerCase(),
    );
  }
}