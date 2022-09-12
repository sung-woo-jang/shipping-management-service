import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  // 구매자 정보 가져오기
  @Get('/:id')
  getBuyr(@Param('id') id: number) {
    return this.buyrService.getBuyr(id);
  }
}
