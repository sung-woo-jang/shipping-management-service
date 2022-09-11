import { Controller } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  //Get 주문내역 열람
  // getPaymentList

  //Get 주문내역 검색
  // 주문 상태, 시작일자, 종료일자에 따른 필터
  // getPaymentFilter

  //Get 주문자명으로 검색
  // getPaymentSearchByUsername

  // Post 주문건에 대하여 발송 처리
}
