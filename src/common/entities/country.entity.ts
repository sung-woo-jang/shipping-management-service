import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
