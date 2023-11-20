import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Serveys } from './serveys.entity';
import { Repository } from 'typeorm';
import { createServeyDto } from './dto/create-servey.dto';
import { updateServeyDto } from './dto/update-servey.dto';
import { Contents } from 'src/contents/contents.entity';

@Injectable()
export class ServeysService {
    constructor(
        @InjectRepository(Serveys)
        private serveysRepository: Repository<Serveys>,

        @InjectRepository(Contents)
        private contentsRespository: Repository<Contents>
    ) { }

    getAllServeys() {
        return this.serveysRepository.find();
    }

    async getServeyById(id: number): Promise<Serveys> {
        const servey = await this.serveysRepository.findOneBy({ id: id });
        if (!servey) throw new NotFoundException(`servey not found with the id ${id}`);
        return servey
    }

    createServey(servey: createServeyDto) {
        return this.serveysRepository.save(servey);
    }

    deleteServey(id: number) {
        return this.serveysRepository.delete(id);
    }

    async updateServeyById(id: number, serveyData: updateServeyDto) {
        await this.serveysRepository.update(id, serveyData)
    }

    async updateContentById(id: number, contentId: number) {
        const content = await this.contentsRespository.findOneBy({ id: contentId })
        if (!content)
            throw new NotFoundException(`car not found with the id ${contentId}`);

        const servey = await this.serveysRepository.findOneBy({ id: id })
        if (servey.contents.length == 0 || !servey.contents.includes(content)) {
            servey.contents.push(content)
        } else {
            servey.contents.indexOf(content)
        }

        console.log(servey)
        await this.serveysRepository.update(id, content)
    }
}
