import { Controller, Post } from '@nestjs/common';
import { BuyrService } from './buyr.service';

@Controller('buyr')
export class BuyrController {
  constructor(private readonly buyrService: BuyrService) {}

  // 구매자 등록
}
