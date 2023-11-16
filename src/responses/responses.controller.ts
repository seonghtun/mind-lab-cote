import { Controller, Get } from '@nestjs/common';
import { ResponsesService } from './responses.service';

@Controller('response')
export class ResponsesController {
    constructor(
        private readonly responsesService: ResponsesService
    ) { }

    @Get()
    getAllResponses() {
        return this.responsesService.getAllResponses()
    }
}
