import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ServeysService } from './serveys.service';
import { createServeyDto } from './create-servey.dto';

@Controller('servey')
export class ServeysController {
    constructor(
        private readonly serveysService: ServeysService
    ) { }

    @Get()
    getAllServeys() {
        return this.serveysService.getAllServeys()
    }

    @Post()
    createUser(@Body() serveyData: createServeyDto) {
        return this.serveysService.createServey(serveyData)
    }

    @Delete(':id')
    deleteteUser(@Param('id') id: number) {
        return this.serveysService.deleteServey(id)
    }
}
