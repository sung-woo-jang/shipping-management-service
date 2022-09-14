import { Body, Controller, Post } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { VouchersService } from './vouchers.service';

@Controller('vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  // 신규 쿠폰 코드 발급
  // 구매자와 연결
  // 메서드레벨 파이프 (type, discountValue)
  @Post()
  createVoucher(@Body() createVoucherDto: CreateVoucherDto) {
    return this.vouchersService.createVoucher(createVoucherDto);
  }

  // 쿠폰 사용내역 가져오기
  // 쿠폰 타입별 사용 횟수, 총 할인액
}
