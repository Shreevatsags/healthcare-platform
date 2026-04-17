import { Controller, Post, Body } from '@nestjs/common';
import { SlotsService } from './slots.service';
import { GetSlotsDto } from './dto/get-slots.dto';

@Controller('slots')
export class SlotsController {
  constructor(private readonly slotsService: SlotsService) {}

  @Post('generate')
  generate(@Body() body: GetSlotsDto) {
    return this.slotsService.generateSlots(body);
  }
}