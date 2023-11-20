import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serveys } from './serveys.entity';
// import { ServeysController } from './serveys.controller';
import { ServeysService } from './serveys.service';
import { ServeyResolver } from './serveys.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Serveys])],
    // controllers: [ServeysController],
    providers: [ServeysService, ServeyResolver],
})
export class ServeysModule { }
