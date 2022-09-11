import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Payment } from './../../payment/entities/payment.entity';

@Entity()
export class Buyr extends CommonEntity {
  @ApiProperty({
    example: '장성우',
    description: '이름',
    required: true,
  })
  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'incheon',
    description: '도시 이름',
    required: true,
  })
  @Column()
  city: string;

  @ApiProperty({
    example: '22022',
    description: '우편번호',
    required: true,
  })
  @Column()
  zpix: string;

  @ApiProperty({
    example: '82',
    description: '국가 코드번호',
    required: true,
  })
  @Column()
  vccode: number;

  @ApiProperty({
    example: 'KR',
    description: '국가 코드명',
    required: true,
  })
  @Column()
  country: string;

  @OneToMany(() => Payment, (payment) => payment.buyr)
  payments: Payment[];
}
