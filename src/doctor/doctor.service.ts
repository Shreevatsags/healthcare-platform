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
  private doctors: Doctor[] = [];

  // 🧑‍⚕️ Create or Update Doctor Profile
  createOrUpdate(userId: number, dto: any) {
    const existing = this.doctors.find((d) => d.userId === userId);

    if (existing) {
      Object.assign(existing, dto);
      return {
        message: 'Doctor profile updated',
        data: existing,
      };
    }

    const doctor: Doctor = {
      userId,
      ...dto,
    };

    this.doctors.push(doctor);

    return {
      message: 'Doctor profile created',
      data: doctor,
    };
  }


  findDoctors(specialization?: string, name?: string) {
    let filteredDoctors = this.doctors;


    if (specialization) {
      filteredDoctors = filteredDoctors.filter(
        (d) =>
          d.specialization.toLowerCase() ===
          specialization.toLowerCase(),
      );
    }

   
    if (name) {
      filteredDoctors = filteredDoctors.filter((d) =>
        d.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

   
    if (!filteredDoctors.length) {
      return {
        message: 'No doctors found',
        data: [],
      };
    }

    return {
      message: 'Doctors fetched successfully',
      data: filteredDoctors,
    };
  }
}