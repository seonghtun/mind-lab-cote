import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Responses } from './responses.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResponsesService {
    constructor(
        @InjectRepository(Responses)
        private responsesRepository: Repository<Responses>
    ) { }

    getAllResponses() {
        return this.responsesRepository.find()
    }
}
