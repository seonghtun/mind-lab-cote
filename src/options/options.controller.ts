import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OptionsService } from './options.service';
import { createOptionDto } from './dto/create-option.dto';
import { updateOptionDto } from './dto/update-option.dto';

@Controller('option')
export class OptionsController {
    constructor(
        private readonly optionsService: OptionsService
    ) { }

    @Get()
    getAllOptions() {
        return this.optionsService.getAllOptions()
    }

    @Get(':id')
    getOptionByID(@Param('id') id: number) {
        return this.optionsService.getOptionById(id)
    }

    @Post()
    createOption(@Body() optionData: createOptionDto) {
        return this.optionsService.createOption(optionData)
    }

    @Patch(":id")
    updateOptionById(@Param("id") id: number, @Body() optionData: updateOptionDto) {
        console.log(optionData)
        return this.optionsService.updateOptionById(id, optionData)
    }

    @Delete(':id')
    deleteOption(@Param("id") id: number) {
        return this.optionsService.deleteOption(id)
    }


}
