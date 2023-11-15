import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { Car } from '../car/car.entity';
import { UserService } from './user.service';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Car]), TypeOrmModule.forFeature([Task]), TypeOrmModule.forFeature([Meeting])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }