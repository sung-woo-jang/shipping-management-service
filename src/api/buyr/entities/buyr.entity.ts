import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CommonEntity } from './../../../common/entities/common-entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Payment } from './../../payment/entities/payment.entity';
import { Country } from './../../../common/entities/country.entity';

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
  zipx: string;

  @OneToMany(() => Payment, (payment) => payment.buyr)
  payments: Payment[];

  @OneToOne(() => Country, (country) => country.buyr)
  @JoinColumn()
  country: Country;
}
