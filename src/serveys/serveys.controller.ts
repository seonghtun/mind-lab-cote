import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ServeysService } from './serveys.service';
import { createServeyDto } from './dto/create-servey.dto';
import { updateServeyDto } from './dto/update-servey.dto';

@Controller('servey')
export class ServeysController {
    constructor(
        private readonly serveysService: ServeysService
    ) { }

    @Get()
    getAllServeys() {
        return this.serveysService.getAllServeys()
    }

    @Get(':id')
    getServeyById(@Param('id') id: number) {
        return this.serveysService.getServeyById(id)
    }

    @Post()
    createServey(@Body() serveyData: createServeyDto) {
        return this.serveysService.createServey(serveyData)
    }

    @Delete(':id')
    deleteServey(@Param('id') id: number) {
        return this.serveysService.deleteServey(id)
    }

    @Patch(':id')
    updateServey(@Param('id') id: number, @Body() serveyData: updateServeyDto) {
        this.serveysService.updateById(id, serveyData)
    }
}
