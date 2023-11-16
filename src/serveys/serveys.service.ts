import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Serveys } from './serveys.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServeysService {
    constructor(
        @InjectRepository(Serveys)
        private serveysRepository: Repository<Serveys>
    ) { }

    getAllServeys() {
        return this.serveysRepository.find();
    }

    async getById(id: number): Promise<Serveys> {
        const servey = await this.serveysRepository.findOneBy({ id: id });
    }
}
