import { PickType } from '@nestjs/swagger';
import { Payment } from '../entities/payment.entity';

export class UpdateDeliveryStateDto extends PickType(Payment, [
  'delivery_state',
  'id',
]) {}
