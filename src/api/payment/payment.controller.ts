import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CommonResponse } from './../../common/responses/common.response';
import { PaymentAPIDocs } from './docs/payment.docs';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentDto } from './dto/payment.dto';
import { UpdateDeliveryStateDto } from './dto/update-payment.dto';
import { PaymentService } from './payment.service';
import { PayState } from './entities/payment.entity';

@ApiTags('주문 관리')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // Post 구매 내역 추가
  // 구매 국가, 구매 갯수에 따른 배송비 적용
  // 쿠폰 사용에 따른 사용 할인 적용
  @ApiOperation(PaymentAPIDocs.createPaymentOperation())
  @ApiCreatedResponse(PaymentAPIDocs.createPaymentCreatedResponse())
  @Post('/')
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    return await this.paymentService.createPayment(createPaymentDto);
  }

  //Get 주문내역 리스트 열람
  @Get()
  @ApiOperation(PaymentAPIDocs.getPaymentListOperation())
  @ApiOkResponse(CommonResponse.OkResponse(PaymentDto))
  async getPaymentList() {
    return await this.paymentService.getPaymentList();
  }

  //Get 주문내역 검색
  // 주문 상태, 시작일자, 종료일자에 따른 필터
  @Get('/search')
  @ApiQuery({ name: 'status', enum: PayState })
  @ApiOperation(PaymentAPIDocs.getPaymentFilterOperation())
  async getPaymentFilter(@Query('status') status: PayState) {
    return this.paymentService.getPaymentFilter(status);
  }

  // Post 배송 상태 업데이트
  @Patch('/')
  @ApiOperation(PaymentAPIDocs.updateDeliveryStateOperation())
  @ApiOkResponse(PaymentAPIDocs.updateDeliveryStateOkResponse())
  async updateDeliveryState(
    @Body() updateDeliveryStateDto: UpdateDeliveryStateDto,
  ) {
    return this.paymentService.updateDeliveryState(updateDeliveryStateDto);
  }
}
