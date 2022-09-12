import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyr } from '../buyr/entities/buyr.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdateDeliveryStateDto } from './dto/update-payment.dto';
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

    return payment.raw;
  }

  async getPaymentList() {
    const list = await this.paymentRepository
      .createQueryBuilder('payment')
      .leftJoinAndSelect('payment.buyr', 'buyr')
      .select([
        'payment.createAt as Date',
        'payment.pay_state as pay_state',
        'payment.quantity as quantity',
        'payment.price as price',
        'payment.delivery_state as delivery_state',
        'buyr.city',
        'buyr.country',
        'buyr.zipx',
        'buyr.vccode',
        'payment.delivery_num as delivery_num',
      ])
      .getRawMany();

    return list;
  }

  async getPaymentFilter(status: string) {
    const queryResult = await this.paymentRepository
      .createQueryBuilder('payment')
      .andWhere('payment.pay_state = :status', { status })
      .getMany();

    return queryResult;
  }

  async updateDeliveryState(updateDeliveryStateDto: UpdateDeliveryStateDto) {
    const { delivery_state, id } = updateDeliveryStateDto;
    const payment = await this.paymentRepository
      .createQueryBuilder('payment')
      .update()
      .set({ delivery_state })
      .where('payment.id = :id', { id })
      .execute();

    if (payment.affected)
      return await this.paymentRepository
        .createQueryBuilder('payment')
        .where('payment.id = :id', { id })
        .getOne();

    throw new ForbiddenException('알 수 없는 오류');
  }
}
