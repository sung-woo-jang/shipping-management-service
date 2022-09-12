import { PickType } from '@nestjs/swagger';
import { Buyr } from '../entities/buyr.entity';

export class CreateBuyrDto extends PickType(Buyr, [] as const) {}
