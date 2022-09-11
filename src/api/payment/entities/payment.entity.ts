import { CommonEntity } from './../../../common/entities/common-entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { Buyr } from './../../buyr/entities/buyr.entity';

export enum PayState {
  Completion = '결제완료',
  Cancellation = '결제취소',
}

@Entity()
export class Payment extends CommonEntity {
  @ApiProperty({
    example: '배송 상태',
    required: true,
  })
  @Column({ default: PayState.Completion })
  @IsEnum(PayState)
  pay_state: PayState;

  @ApiProperty({
    example: '주문 수량',
    required: true,
  })
  @Column()
  quantity: number;

  @ApiProperty({
    example: '결제 금액',
    required: true,
  })
  @Column()
  price: number;

  @ApiProperty({
    example: '운송장 번호',
  })
  @Column()
  delivery_num: string | null;

  @ManyToOne(() => Buyr, (buyr) => buyr.payments)
  buyr: Buyr;
}
