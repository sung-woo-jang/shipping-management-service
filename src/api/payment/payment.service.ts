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
    const { quantity, price, delivery_num, buyrId } = createPaymentDto;
    const buyr = await this.buyrRepository
      .createQueryBuilder('buyr')
      .leftJoinAndSelect('buyr.country', 'country')
      .andWhere('buyr.id = :buyrId', { buyrId })
      .getOne();

    const payment = await this.paymentRepository
      .createQueryBuilder('payment')
      .insert()
      .values({ quantity, price: price * quantity, delivery_num, buyr })
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
        'payment.delivery_num as delivery_num',
        'buyr.name as name',
        'buyr.city as city',
        'buyr.zipx as zipx',
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
