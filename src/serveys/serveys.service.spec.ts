import { Test, TestingModule } from '@nestjs/testing';
import { ServeysService } from './serveys.service';

describe('ServeysService', () => {
  let service: ServeysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServeysService],
    }).compile();

    service = module.get<ServeysService>(ServeysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
