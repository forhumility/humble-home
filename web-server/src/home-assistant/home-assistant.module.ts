import { Module } from '@nestjs/common';
import { HomeAssistantService } from './home-assistant.service';
import { HomeAssistantController } from './home-assistant.controller';
import { HttpServiceModule } from 'src/http-service/http-service.module';

@Module({
  providers: [HomeAssistantService],
  controllers: [HomeAssistantController],
  imports: [HttpServiceModule],
})
export class HomeAssistantModule {}
