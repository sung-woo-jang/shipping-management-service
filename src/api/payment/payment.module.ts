import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Buyr } from '../buyr/entities/buyr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Buyr])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
