import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorProfileDto } from './dto/doctor-profile.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  // 🧑‍⚕️ Onboarding (Create/Update)
  @Post('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.DOCTOR)
  createOrUpdate(@Req() req, @Body() dto: DoctorProfileDto) {
    return this.doctorService.createOrUpdate(req.user.sub, dto);
  }

  // 🔍 Discovery API
  @Get('all')
  getAllDoctors() {
    return this.doctorService.findAll();
  }

  // 🔍 Search by specialization
  @Get('search')
  searchDoctor(@Query('specialization') specialization: string) {
    return this.doctorService.findBySpecialization(specialization);
  }
}