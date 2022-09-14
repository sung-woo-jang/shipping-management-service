import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VoucherCodeGenerator } from './../../common/utils/voucher.utils';
import { Repository } from 'typeorm';
import { Buyr } from '../buyr/entities/buyr.entity';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { Voucher } from './entities/voucher.entity';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Voucher)
    private readonly vouchersRepository: Repository<Voucher>,
    @InjectRepository(Buyr)
    private readonly buyrRepository: Repository<Buyr>,
  ) {}

  async createVoucher(createVoucherDto: CreateVoucherDto) {
    const { type, discountValue, buyrId } = createVoucherDto;
    const buyr = await this.buyrRepository
      .createQueryBuilder('buyr')
      .leftJoinAndSelect('buyr.voucher', 'voucher')
      .where('buyr.id = :buyrId', { buyrId })
      .getOne();

    // 쿠폰 발급
    const code = VoucherCodeGenerator.generateFlatDiscountVoucher('F')[0];
    // 할인 금액 적용
    const voucher = this.vouchersRepository
      .createQueryBuilder('voucher')
      .insert()
      .values({ type, code, discountValue, buyr })
      .execute();

    return voucher;
  }
}
