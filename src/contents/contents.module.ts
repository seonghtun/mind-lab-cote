import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contents } from './contents.entity';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';

@Module({
    imports: [TypeOrmModule.forFeature([Contents])],
    controllers: [ContentsController],
    providers: [ContentsService],
})
export class ContentsModule { }
