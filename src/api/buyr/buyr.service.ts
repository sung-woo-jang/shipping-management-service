import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './../../common/entities/country.entity';
import { Repository } from 'typeorm';
import { CreateBuyrDto } from './dto/create-buyr.dto';
import { Buyr } from './entities/buyr.entity';

@Injectable()
export class BuyrService {
  constructor(
    @InjectRepository(Buyr)
    private readonly buyrRepository: Repository<Buyr>,
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  async createBuyr(createBuyrDto: CreateBuyrDto) {
    const { name, city, zipx, dcode } = createBuyrDto;

    const country = await this.countryRepository
      .createQueryBuilder('country')
      .andWhere('country.dcode = :dcode', { dcode })
      .getOne();

    const buyr = await this.buyrRepository
      .createQueryBuilder('buyr')
      .insert()
      .values({ name, city, zipx, country })
      .execute();

    return buyr.raw;
  }
}
