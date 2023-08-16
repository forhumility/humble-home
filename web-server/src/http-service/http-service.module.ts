import { Module } from '@nestjs/common';
import { HttpServiceService } from './http-service.service';
import { HttpModule } from '@nestjs/axios';

import { host, port, secretKey } from '../config/conf.ha';
const baseURL = `http://${host}:${port}/api`;

@Module({
  imports: [
    HttpModule.register({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${secretKey}`,
      },
    }),
  ],
  providers: [HttpServiceService],
  exports: [HttpServiceService],
})
export class HttpServiceModule {}
