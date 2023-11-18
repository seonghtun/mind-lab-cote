import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Responses } from './responses.entity';
import { Repository } from 'typeorm';
import { createResponseDto } from './dto/create-response.dto';
import { updateResponseDto } from './dto/update-response.dto';

@Injectable()
export class ResponsesService {
    constructor(
        @InjectRepository(Responses)
        private responsesRepository: Repository<Responses>
    ) { }

    getAllResponses() {
        return this.responsesRepository.find()
    }

    async getResponseById(id: number) {
        return this.responsesRepository.findOneBy({ id: id })
    }

    createResponse(@Body() ResponseData: createResponseDto) {
        return this.responsesRepository.save(ResponseData)
    }

    deleteResponse(id: number) {
        return this.responsesRepository.delete(id)
    }

    async updateResponseById(id: number, responseData: updateResponseDto) {
        console.log(id, responseData)
        return await this.responsesRepository.update(id, responseData)
    }
}
