import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity } from 'typeorm';
import { IsString } from 'class-validator';

export enum VoucherType {
  F = '정액 할인 쿠폰',
  D = '배송 할인 쿠폰',
  P = '일반 할인 쿠폰',
}

@Entity()
export class Voucher extends CommonEntity {
  @Column()
  @IsString()
  code: string;

  @Column({ type: 'enum', enum: VoucherType, comment: '쿠폰 타입 할인 타입.' })
  type: VoucherType;

  @Column({ comment: '쿠폰 사용으로 할인된 금액' })
  discountAmount: number | null;

  @Column({
    type: 'timestamptz',
    default: new Date(new Date().setMonth(new Date().getMonth() + 1)),
  })
  expiresAt: Date;
}
