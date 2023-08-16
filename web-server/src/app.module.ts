import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HttpServiceModule } from './http-service/http-service.module';
import { HomeAssistantModule } from './home-assistant/home-assistant.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://127.0.0.1/humble-home-api`),
    HttpServiceModule,
    HomeAssistantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
