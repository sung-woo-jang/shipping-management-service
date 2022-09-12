import { PickType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Payment } from '../entities/payment.entity';

export class CreatePaymentDto extends PickType(Payment, [
  'quantity',
  'price',
  'delivery_num',
] as const) {
  @IsNumber()
  buyrId: number;
}
