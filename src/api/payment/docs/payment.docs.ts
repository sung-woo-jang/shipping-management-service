import { CreatePaymentDto } from '../dto/create-payment.dto';
import { createResponseDto } from './../../../common/utils/responseFormatter.utils';
export class PaymentAPIDocs {
  static createPaymentOperation() {
    return {
      summary: '구매 내역 추가',
      description:
        '구매 국가, 구매 갯수에 따른 배송비 적용이 되는 구매 내역 추가 API.',
    };
  }
  static createPaymentCreatedResponse() {
    return {
      description: 'Created',
      type: createResponseDto(CreatePaymentDto),
    };
  }

  static getPaymentFilterOperation() {
    return {
      summary: '통계 조회 API',
    };
  }

  static getPaymentListOperation() {
    return {
      summary: '주문내역 리스트 열람',
    };
  }

  static updateDeliveryStateOperation() {
    return {
      summary: '배송 상태 업데이트',
      description: '배송 상태를 수정합니다.',
    };
  }
  static updateDeliveryStateOkResponse() {
    return {
      description: 'Ok',
      type: createResponseDto(CreatePaymentDto),
    };
  }
}
