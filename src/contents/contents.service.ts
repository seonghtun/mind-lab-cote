import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contents } from './contents.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContentsService {
    constructor(
        @InjectRepository(Contents)
        private contentsRepository: Repository<Contents>
    ) { }

    getAllContents() {
        return this.contentsRepository.find()
    }
}
