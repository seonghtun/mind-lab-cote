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

    Hello() {
        return 'Hello World!'
    }

    getAllServeys() {
        return this.serveysRepository.find();
    }
}
