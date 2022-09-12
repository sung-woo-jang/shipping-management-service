import { Test, TestingModule } from '@nestjs/testing';
import { BuyrService } from './buyr.service';

describe('BuyrService', () => {
  let service: BuyrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyrService],
    }).compile();

    service = module.get<BuyrService>(BuyrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
