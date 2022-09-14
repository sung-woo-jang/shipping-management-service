import { PickType } from '@nestjs/swagger';
import { Voucher } from '../entities/voucher.entity';

export class CreateVoucherDto extends PickType(Voucher, [
  'type',
  'discountValue',
] as const) {
  buyrId: number;
}
