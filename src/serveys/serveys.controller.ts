import { Controller, Get } from '@nestjs/common';
import { ServeysService } from './serveys.service';

@Controller('servey')
export class ServeysController {
    constructor(
        private readonly serveysService: ServeysService
    ) { }

    @Get()
    getAllServeys() {
        return this.serveysService.getAllServeys()
    }
}
