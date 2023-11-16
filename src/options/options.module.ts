import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Options } from './options.entity';
import { OptionsController } from './options.controller';
import { OptionsService } from './options.service';

@Module({
    imports: [TypeOrmModule.forFeature([Options])],
    controllers: [OptionsController],
    providers: [OptionsService],
})
export class OptionsModule { }
