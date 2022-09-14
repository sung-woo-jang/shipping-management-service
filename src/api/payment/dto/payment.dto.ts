import { OmitType } from '@nestjs/swagger';
import { Payment } from '../entities/payment.entity';

export class PaymentDto extends OmitType(Payment, [] as const) {}
