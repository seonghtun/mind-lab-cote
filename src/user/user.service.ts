import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { createUserDto } from './dto/create-user.dto';
import { createTaskDto } from './dto/create-task.dto';
import { createMeetingDto } from './dto/create-meeting.dto';
import { Car } from 'src/car/car.entity';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Car)
        private carRepository: Repository<Car>,
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        @InjectRepository(Meeting)
        private meetingRepository: Repository<Meeting>,

    ) { }

    getAllUsers() {
        return this.userRepository.find();
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id: id } });
        if (!user) throw new NotFoundException(`user not found with the id ${id}`);
        return user;
    }

    createUser(userData: createUserDto) {
        return this.userRepository.save(userData);
    }

    deleteUser(id: number) {
        return this.userRepository.delete(id);
    }

    async updateCarById(id: number, carId: Car) {
        try {
            const car = await this.carRepository.findOne({ where: { id: carId.id } });
            console.log(car);
            if (!car)
                throw new NotFoundException(`car not found with the id ${carId}`);
            const user = await this.userRepository.findOne({ where: { id: id } });
            user.car = car;
            console.log(user);
            return await this.userRepository.save(user);
        } catch (err) {
            console.error(err)
        }
    }

    async getCarInfo(id: number): Promise<Car> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user || !user.carId) throw new NotFoundException(`not found error`);
        const carInfo = await this.carRepository.findOneBy({ id: user.carId });
        return carInfo;
    }

    async createTask(id: number, taskData: createTaskDto) {
        const user = await this.userRepository.findOne({
            where: { id: id },
            relations: ['task'],
        })
        const task = await this.taskRepository.save(taskData)
        user.task.push(task)
        return await this.userRepository.save(user)
    }

    async createMeeting(meetingInfo: createMeetingDto) {
        const { owner, name } = meetingInfo
        console.log(owner.id)
        const user = await this.userRepository.findOne({
            where: { id: owner.id },
            relations: ['meetings'],
        })
        const meeting = await this.meetingRepository.save({
            name: name,
            owner: user,
        })
        user.meetings.push(meeting)
        return await this.userRepository.save(user)
    }
}