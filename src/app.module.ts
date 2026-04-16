import { Module } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthController } from './auth/auth.controller';
import { DoctorController } from './doctor/doctor.controller';
import { PatientController } from './patient/patient.controller';
import { DoctorService } from './doctor/doctor.service';
import { PatientService } from './patient/patient.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController, DoctorController, PatientController],
  providers: [
    AuthService,
    UsersService,
    JwtStrategy,
    DoctorService,
    PatientService,
  ],
})
export class AppModule {}