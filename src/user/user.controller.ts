import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getAllUser() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return `get User with the id ${id}`;
    }

    @Post()
    createUser(@Body() userData: User) {
        return `create User`;
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string) {
        return `delete user with the id ${id}`;
    }

    @Patch(':id')
    updateUserById(@Param('id') id: string, @Body() userData: User) {
        return `update user with the id ${id}`;
    }
}