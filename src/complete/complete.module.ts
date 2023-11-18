import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Completes } from './complete.entity';
import { CompleteController } from './complete.controller';
import { CompleteService } from './complete.service';

@Module({
    imports: [TypeOrmModule.forFeature([Completes]),],
    controllers: [CompleteController],
    providers: [CompleteService],
})
export class CompleteModule { }
