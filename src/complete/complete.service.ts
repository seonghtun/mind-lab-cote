import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Completes } from './complete.entity';
import { Repository } from 'typeorm';
import { createCompleteDto } from './dto/create-complete.dto';
import { updateCompleteDto } from './dto/update-complete.dto';

@Injectable()
export class CompleteService {
    constructor(
        @InjectRepository(Completes)
        private CompletesRepository: Repository<Completes>
    ) { }

    getAllCompletes() {
        return this.CompletesRepository.find()
    }

    async getCompleteById(id: number) {
        return this.CompletesRepository.findOneBy({ id: id })
    }

    createComplete(@Body() CompleteData: createCompleteDto) {
        return this.CompletesRepository.save(CompleteData)
    }

    deleteComplete(id: number) {
        return this.CompletesRepository.delete(id)
    }

    async updateCompleteById(id: number, CompleteData: updateCompleteDto) {
        console.log(id, CompleteData)
        return await this.CompletesRepository.update(id, CompleteData)
    }
}
