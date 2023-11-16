import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsesController } from './responses.controller';
import { ResponsesService } from './responses.service';
import { Responses } from './responses.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Responses])],
    controllers: [ResponsesController],
    providers: [ResponsesService],
})
export class ResponsesModule { }
