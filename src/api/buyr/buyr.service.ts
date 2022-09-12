import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyr } from './entities/buyr.entity';

@Injectable()
export class BuyrService {
  constructor(
    @InjectRepository(Buyr)
    private readonly buyrRepository: Repository<Buyr>,
  ) {}
}
