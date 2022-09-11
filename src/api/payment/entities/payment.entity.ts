import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Payment extends CommonEntity {
  @Column()
  pay_state: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  delivery_num: string;
}
