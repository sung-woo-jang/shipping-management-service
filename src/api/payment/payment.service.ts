import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyr } from '../buyr/entities/buyr.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(Buyr)
    private readonly buyrRepository: Repository<Buyr>,
  ) {}

  async createPayment(createPaymentDto: CreatePaymentDto) {
    const buyr = await this.buyrRepository
      .createQueryBuilder('buyr')
      .andWhere('buyr.id = :id', { id: 1 })
      .getOne();

    const payment = await this.paymentRepository
      .createQueryBuilder('payment')
      .insert()
      .values({ ...createPaymentDto, buyr })
      .execute();

    return payment;
  }

  async getPaymentList() {
    const list = await this.paymentRepository.find();

    return list;
  }

  async getPaymentFilter(status: string) {
    const queryResult = await this.paymentRepository
      .createQueryBuilder('payment')
      .andWhere('payment.pay_state = :status', { status })
      .getMany();

    return queryResult;
  }
}
