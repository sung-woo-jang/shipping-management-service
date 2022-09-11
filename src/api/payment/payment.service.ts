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
    const list = await this.paymentRepository
      .createQueryBuilder('payment')
      .leftJoinAndSelect('payment.buyr', 'buyr')
      .select([
        'payment.createAt as Date',
        'payment.pay_state as pay_state',
        'payment.quantity as quantity',
        'payment.price as price',
        'buyr.city',
        'buyr.country',
        'buyr.zpix',
        'buyr.vccode',
        'payment.delivery_num as delivery_num',
      ])
      .getRawMany();

    return list;
  }
  /* 
      {
            "payment_id": 1,
            "payment_create_at": "2022-09-11T07:41:04.625Z",
            "payment_update_at": "2022-09-11T07:41:04.625Z",
            "payment_delete_at": null,
            "payment_pay_state": "결제완료",
            "payment_quantity": 2,
            "payment_price": 10000,
            "payment_delivery_num": "450784629761",
            "payment_buyr_id": 1,
            "buyr_id": 1,
            "buyr_create_at": "2022-09-11T07:33:21.491Z",
            "buyr_update_at": "2022-09-11T07:33:21.491Z",
            "buyr_delete_at": null,
            "buyr_name": "장성우",
            "buyr_city": "incheon",
            "buyr_zpix": "20902",
            "buyr_vccode": 82,
            "buyr_country": "KR"
        },
  */

  async getPaymentFilter(status: string) {
    const queryResult = await this.paymentRepository
      .createQueryBuilder('payment')
      .andWhere('payment.pay_state = :status', { status })
      .getMany();

    return queryResult;
  }
}
