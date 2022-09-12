import * as voucher_codes from 'voucher-code-generator';

export class VoucherCodeGenerator {
  // 정액할인 - 설정한 금액 이상 구매 시 총 구매 금액에서 설정한 할인 금액을 차감하는 방식

  //
  static generateFlatDiscountVoucher(type: string) {
    return voucher_codes.generate({
      length: 10,
      count: 1,
      charset: voucher_codes.charset('alphanumeric'),
      prefix: type,
      postfix: `${new Date().getFullYear()}`,
    });
  }

  // // 배송비 할인
  // static generateDeliveryDiscountVoucher() {
  //   return voucher_codes.generate({
  //     length: 10,
  //     count: 1,
  //     charset: voucher_codes.charset('alphanumeric'),
  //     prefix: 'D',
  //     postfix: `${new Date().getFullYear()}`,
  //   });
  // }

  // // % 할인 - 특정 상품에 관하여 할인 쿠폰 제공
  // static generatePercentageDiscountVoucher() {
  //   return voucher_codes.generate({
  //     length: 10,
  //     count: 1,
  //     charset: voucher_codes.charset('alphanumeric'),
  //     prefix: 'P',
  //     postfix: `${new Date().getFullYear()}`,
  //   });
  // }
}
