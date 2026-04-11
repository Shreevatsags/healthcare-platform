import { Injectable } from '@nestjs/common';
type Patient = {
  userId: number;
  name: string;
  age: number;
  gender: string;
};

@Injectable()
export class PatientService {
  private patients: Patient[] = []; // ✅ FIXED

  createOrUpdate(userId: number, dto: any) {
    const existing = this.patients.find((p) => p.userId === userId);

    if (existing) {
      Object.assign(existing, dto);
      return { message: 'Patient profile updated', data: existing };
    }

    const patient: Patient = {
      userId,
      ...dto,
    };

    this.patients.push(patient);
    return { message: 'Patient profile created', data: patient };
  }
}