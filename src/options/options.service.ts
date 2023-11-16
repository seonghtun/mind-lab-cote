import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Options } from './options.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionsService {
    constructor(
        @InjectRepository(Options)
        private optionsRepository: Repository<Options>
    ) { }

    getAllOptions() {
        return this.optionsRepository.find()
    }
}
