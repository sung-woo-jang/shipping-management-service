import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { IsEnum, IsString } from 'class-validator';
import { Buyr } from './../../../api/buyr/entities/buyr.entity';

export enum VoucherType {
  F = '정액 할인 쿠폰',
  D = '배송_할인_쿠폰',
  P = '일반_할인_쿠폰',
}

@Entity()
export class Voucher extends CommonEntity {
  @Column()
  @IsString()
  code: string;

  @Column({ default: VoucherType.F })
  @IsEnum(VoucherType)
  type: VoucherType;

  @Column({ comment: '쿠폰 사용으로 할인된 금액', default: null })
  discountAmount: number | null;

  @Column({ comment: '할인 금액 | 비율' })
  discountValue: number;

  @Column({ comment: '쿠폰 사용 여부', default: false })
  isUsed: boolean;

  @Column({
    type: 'timestamptz',
    default: new Date(new Date().setMonth(new Date().getMonth() + 1)),
  })
  expiresAt: Date;

  @OneToOne(() => Buyr, (buyr) => buyr.voucher)
  @JoinColumn()
  buyr: Buyr;
}
