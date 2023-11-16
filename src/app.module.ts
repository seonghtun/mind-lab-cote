import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ServeysModule } from './serveys/serveys.module';
import { OptionsModule } from './options/options.module';
import { ContentsModule } from './contents/contents.module';
import { ResponsesModule } from './responses/responses.module';
import { CompleteModule } from './complete/complete.module';
import ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, ServeysModule, OptionsModule, ContentsModule, ResponsesModule, CompleteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
