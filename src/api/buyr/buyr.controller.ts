import { Body, Controller, Post } from '@nestjs/common';
import { BuyrService } from './buyr.service';
import { CreateBuyrDto } from './dto/create-buyr.dto';

@Controller('buyr')
export class BuyrController {
  constructor(private readonly buyrService: BuyrService) {}

  // 구매자 등록
  @Post('/regist')
  createBuyr(@Body() createBuyrDto: CreateBuyrDto) {
    return this.buyrService.createBuyr(createBuyrDto);
  }
}
