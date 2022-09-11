import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { Buyr } from './../../buyr/entities/buyr.entity';

export enum PayState {
  Completion = '결제완료',
  Cancellation = '결제취소',
}

export enum DeliveryState {
  // 배송 중, 배송 완료
  Preparing = '배송 준비중',
  Progress = '배송중',
  completed = '배송완료',
}

@Entity()
export class Payment extends CommonEntity {
  @ApiProperty({
    description: '결제 상태',
    example: '결제완료',
    required: true,
  })
  @Column({ default: PayState.Completion })
  @IsEnum(PayState)
  pay_state: PayState;

  @ApiProperty({
    description: '배송 상태',
    example: '배송 준비중',
    required: true,
  })
  @Column({ default: DeliveryState.Preparing })
  @IsEnum(DeliveryState)
  delivery_state: DeliveryState;

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
