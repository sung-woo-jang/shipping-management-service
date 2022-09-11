import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Payment extends CommonEntity {
  @ApiProperty({
    example: '배송 상태',
    required: true,
  })
  @Column()
  pay_state: string;

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
}
