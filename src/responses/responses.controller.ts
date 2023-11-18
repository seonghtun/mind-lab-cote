import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { updateResponseDto } from './dto/update-response.dto';
import { createResponseDto } from './dto/create-response.dto';

@Controller('response')
export class ResponsesController {
    constructor(
        private readonly responsesService: ResponsesService
    ) { }

    @Get()
    getAllResponses() {
        return this.responsesService.getAllResponses()
    }

    @Get(':id')
    getResponseById(@Param('id') id: number) {
        return this.responsesService.getResponseById(id)
    }

    @Post()
    createResponse(@Body() ResponseData: createResponseDto) {
        return this.responsesService.createResponse(ResponseData)
    }

    @Delete(':id')
    deleteResponse(@Param('id') id: number) {
        return this.responsesService.deleteResponse(id)
    }

    @Patch(':id')
    updateResponse(@Param('id') id: number, @Body() responseData: updateResponseDto) {
        this.responsesService.updateResponseById(id, responseData)
    }
}
