import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contents } from './contents.entity';
import { Repository } from 'typeorm';
import { createContentDto } from './dto/create-contents.dto';
import { updateContentDto } from './dto/update-content.dto';

@Injectable()
export class ContentsService {
    constructor(
        @InjectRepository(Contents)
        private contentsRepository: Repository<Contents>
    ) { }

    getAllContents() {
        return this.contentsRepository.find()
    }

    async getContentsById(id: number): Promise<Contents> {
        const contents = await this.contentsRepository.findOneBy({ id: id })
        if (!contents) throw new NotFoundException(`servey not found with the id ${id}`)
        return contents
    }

    createContent(contentData: createContentDto) {
        return this.contentsRepository.save(contentData)
    }

    deleteContent(id: number) {
        return this.contentsRepository.delete(id)
    }

    async updateContentById(id: number, contentData: updateContentDto) {
        await this.contentsRepository.update(id, contentData)
    }
}
