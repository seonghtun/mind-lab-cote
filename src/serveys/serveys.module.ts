import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serveys } from './serveys.entity';
import { ServeysController } from './serveys.controller';
import { ServeysService } from './serveys.service';

@Module({
    imports: [TypeOrmModule.forFeature([Serveys])],
    controllers: [ServeysController],
    providers: [ServeysService],
})
export class ServeysModule { }
