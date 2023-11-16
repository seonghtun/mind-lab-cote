import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Serveys } from './serveys.entity';
import { Repository } from 'typeorm';
import { createServeyDto } from './create-servey.dto';

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

    // async updateCarById(id: number, carId: Car) {
    //     try {
    //         const car = await this.carRepository.findOne({ where: { id: carId.id } });
    //         console.log(car);
    //         if (!car)
    //             throw new NotFoundException(`car not found with the id ${carId}`);
    //         const user = await this.userRepository.findOne({ where: { id: id } });
    //         user.car = car;
    //         console.log(user);
    //         return await this.userRepository.save(user);
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }
}
