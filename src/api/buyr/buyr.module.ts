import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './../../common/entities/country.entity';
import { BuyrController } from './buyr.controller';
import { BuyrService } from './buyr.service';
import { Buyr } from './entities/buyr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Buyr, Country])],
  controllers: [BuyrController],
  providers: [BuyrService],
})
export class BuyrModule {}
