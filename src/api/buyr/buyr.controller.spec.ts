import { Test, TestingModule } from '@nestjs/testing';
import { BuyrController } from './buyr.controller';

describe('BuyrController', () => {
  let controller: BuyrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyrController],
    }).compile();

    controller = module.get<BuyrController>(BuyrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
