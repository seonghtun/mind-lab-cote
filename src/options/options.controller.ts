import { Controller, Get } from '@nestjs/common';
import { OptionsService } from './options.service';

@Controller('option')
export class OptionsController {
    constructor(
        private readonly optionsService: OptionsService
    ) { }

    @Get()
    getAllOptions() {
        return this.optionsService.getAllOptions()
    }
}
