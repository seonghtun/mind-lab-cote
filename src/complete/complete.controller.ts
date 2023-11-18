import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CompleteService } from './complete.service';
import { createCompleteDto } from './dto/create-complete.dto';
import { updateCompleteDto } from './dto/update-complete.dto';

@Controller('complete')
export class CompleteController {
    constructor(
        private readonly completesService: CompleteService
    ) { }

    @Get()
    getAllCompletes() {
        return this.completesService.getAllCompletes()
    }

    @Get(':id')
    getCompleteById(@Param('id') id: number) {
        return this.completesService.getCompleteById(id)
    }

    @Post()
    createComplete(@Body() CompleteData: createCompleteDto) {
        return this.completesService.createComplete(CompleteData)
    }

    @Delete(':id')
    deleteComplete(@Param('id') id: number) {
        return this.completesService.deleteComplete(id)
    }

    @Patch(':id')
    updateComplete(@Param('id') id: number, @Body() CompleteData: updateCompleteDto) {
        this.completesService.updateCompleteById(id, CompleteData)
    }

}
