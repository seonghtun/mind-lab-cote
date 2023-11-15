import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarController } from './car/car.controller';
import { UserModule } from './user/user.module';
import { ServeysModule } from './serveys/serveys.module';
import ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, ServeysModule],
  controllers: [AppController, CarController],
  providers: [AppService],
})
export class AppModule { }
