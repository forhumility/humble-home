import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class HttpServiceService {
  constructor(private readonly httpService: HttpService) {}

  async get(url: string): Promise<any> {
    const res = await firstValueFrom(this.httpService.get(url));
    return res.data;
  }

  async post(url: string, data: any): Promise<any> {
    const res = await firstValueFrom(this.httpService.post(url, data));
    return res.data;
  }
}
