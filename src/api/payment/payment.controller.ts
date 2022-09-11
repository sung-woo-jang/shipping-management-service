import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // Post 구매 내역 추가
  @Post('')
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    return await this.paymentService.createPayment(createPaymentDto);
  }

  //Get 주문내역 열람
  // getPaymentList

  //Get 주문내역 검색
  // 주문 상태, 시작일자, 종료일자에 따른 필터
  // getPaymentFilter

  //Get 주문자명으로 검색
  // getPaymentSearchByUsername

  // Post 주문건에 대하여 발송 처리
}
