import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Options } from './options.entity';
import { Repository } from 'typeorm';
import { createOptionDto } from './dto/create-option.dto';
import { updateOptionDto } from './dto/update-option.dto';

@Injectable()
export class OptionsService {
    constructor(
        @InjectRepository(Options)
        private optionsRepository: Repository<Options>
    ) { }

    getAllOptions() {
        return this.optionsRepository.find()
    }

    async getOptionById(id: number) {
        return this.optionsRepository.findOneBy({ id: id })
    }

    createOption(@Body() optionData: createOptionDto) {
        return this.optionsRepository.save(optionData)
    }

    deleteOption(id: number) {
        return this.optionsRepository.delete(id)
    }

    async updateOptionById(id: number, optionData: updateOptionDto) {
        console.log(id, optionData)
        return await this.optionsRepository.update(id, optionData)
    }
}
