import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientProfileDto } from './dto/patient-profile.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.PATIENT)
  createOrUpdate(@Req() req, @Body() dto: PatientProfileDto) {
    return this.patientService.createOrUpdate(req.user.sub, dto);
  }
}