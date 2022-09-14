import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { Buyr } from '../buyr/entities/buyr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voucher, Buyr])],
  controllers: [VouchersController],
  providers: [VouchersService],
})
export class VouchersModule {}
