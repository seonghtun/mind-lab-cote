import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Serveys } from './serveys.entity';
import { Repository } from 'typeorm';
import { createServeyDto } from './dto/create-servey.dto';
import { updateServeyDto } from './dto/update-servey.dto';

@Injectable()
export class ServeysService {
    constructor(
        @InjectRepository(Serveys)
        private serveysRepository: Repository<Serveys>
    ) { }

    getAllServeys() {
        return this.serveysRepository.find();
    }

    async getServeyById(id: number): Promise<Serveys> {
        const servey = await this.serveysRepository.findOneBy({ id: id });
        if (!servey) throw new NotFoundException(`servey not found with the id ${id}`);
        return servey
    }

    createServey(serveyData: createServeyDto) {
        return this.serveysRepository.save(serveyData);
    }

    deleteServey(id: number) {
        return this.serveysRepository.delete(id);
    }

    async updateById(id: number, serveyData: updateServeyDto) {
        await this.serveysRepository.update(id, serveyData)
    }
}
