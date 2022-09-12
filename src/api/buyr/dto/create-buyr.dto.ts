import { PickType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Buyr } from '../entities/buyr.entity';

export class CreateBuyrDto extends PickType(Buyr, [
  'name',
  'city',
  'zipx',
] as const) {
  @IsNumber()
  dcode: number;
}
