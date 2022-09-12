import { ApiProperty } from '@nestjs/swagger';
import { Buyr } from './../../api/buyr/entities/buyr.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  code: string;

  @ApiProperty({
    example: '82',
    description: '국가 코드번호',
    required: true,
  })
  @Column()
  dcode: number;

  @ApiProperty({
    example: 'KR',
    description: '국가 코드명',
    required: true,
  })
  @Column()
  name: string;

  @OneToOne(() => Buyr, (buyr) => buyr.country)
  buyr: Buyr;
}
