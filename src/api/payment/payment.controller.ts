import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdateDeliveryStateDto } from './dto/update-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // Post 구매 내역 추가
  @Post('/')
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    return await this.paymentService.createPayment(createPaymentDto);
  }

  //Get 주문내역 열람
  @Get()
  async getPaymentList() {
    return await this.paymentService.getPaymentList();
  }

  //Get 주문내역 검색
  // 주문 상태, 시작일자, 종료일자에 따른 필터
  @Get('/search')
  async getPaymentFilter(@Query('status') status: string) {
    return this.paymentService.getPaymentFilter(status);
  }

  // Post 배송 상태 업데이트
  @Patch('/')
  async updateDeliveryState(
    @Body() updateDeliveryStateDto: UpdateDeliveryStateDto,
  ) {
    return this.paymentService.updateDeliveryState(updateDeliveryStateDto);
  }
}
