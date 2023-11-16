import { Controller, Get } from '@nestjs/common';
import { ContentsService } from './contents.service';

@Controller('content')
export class ContentsController {
    constructor(
        private readonly contentsService: ContentsService
    ) { }

    @Get()
    getAllContents() {
        return this.contentsService.getAllContents()
    }

}
