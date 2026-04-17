import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

// Existing imports
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthController } from './auth/auth.controller';
import { DoctorController } from './doctor/doctor.controller';
import { PatientController } from './patient/patient.controller';
import { DoctorService } from './doctor/doctor.service';
import { PatientService } from './patient/patient.service';

// Modules
import { SlotsModule } from './slots/slots.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '1d' },
    }),

    SlotsModule,
    BookingModule,
  ],
  controllers: [
    AuthController,
    DoctorController,
    PatientController,
  ],
  providers: [
    AuthService,
    UsersService,
    JwtStrategy,
    DoctorService,
    PatientService,
  ],
})
export class AppModule {}