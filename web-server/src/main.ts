/**
 * @Author       : Humility
 * @Date         : 2023-08-03 15:28:04
 * @LastEditTime : 2023-08-03 16:49:21
 * @LastEditors  : Humility
 * @FilePath     : \web-server\src\main.ts
 * @Description  :
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('humble home API')
    .setDescription('humble home API docs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3332);
}
bootstrap();
