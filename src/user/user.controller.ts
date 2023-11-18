import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/create-user.dto';
import { createTaskDto } from './dto/create-task.dto';
import { updateUserDto } from './dto/update-user.dto';
import { Car } from 'src/car/car.entity';
import { createMeetingDto } from './dto/create-meeting.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getAllUser() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id)
    }

    @Post()
    createUser(@Body() userData: createUserDto) {
        return this.userService.createUser(userData)
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: number) {
        this.userService.deleteUser(id);
    }

    @Patch(':id')
    updateCarById(@Param('id') id: number, @Body() userData: updateUserDto) {
        console.log(userData)
        const { car: carId } = userData;
        return this.userService.updateCarById(id, carId);
    }

    @Get('car/:id')
    getCarInfo(@Param('id') id: number): Promise<Car> {
        return this.userService.getCarInfo(id);
    }

    @Patch('task/:id')
    createTask(@Param('id') userId: number, @Body() taskData: createTaskDto) {
        return this.userService.createTask(userId, taskData)
    }

    @Post('meeting')
    createMeeting(@Body() MeetingInfo: createMeetingDto) {
        this.userService.createMeeting(MeetingInfo)
    }

}