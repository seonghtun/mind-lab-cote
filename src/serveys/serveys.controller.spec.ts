import { Test, TestingModule } from '@nestjs/testing';
import { ServeysController } from './serveys.controller';

describe('ServeysController', () => {
  let controller: ServeysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServeysController],
    }).compile();

    controller = module.get<ServeysController>(ServeysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
