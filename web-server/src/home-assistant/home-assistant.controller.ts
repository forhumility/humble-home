/**
 * @Author       : Humility
 * @Date         : 2023-08-07 15:54:35
 * @LastEditTime : 2023-08-08 09:17:01
 * @LastEditors  : Humility
 * @FilePath     : \web-server\src\home-assistant\home-assistant.controller.ts
 * @Description  :
 */
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpServiceService } from 'src/http-service/http-service.service';

@Controller('ha')
@ApiTags('HA API')
export class HomeAssistantController {
  constructor(private readonly httpService: HttpServiceService) {}

  @Get()
  @ApiOperation({ summary: 'API状态' })
  async getState() {
    const data = await this.httpService.get('/');
    return data;
  }
  @Get('/config')
  @ApiOperation({ summary: '配置' })
  async getConfig() {
    const data = await this.httpService.get('/config');
    return data;
  }
  @Get('/events')
  @ApiOperation({ summary: '事件' })
  async getEvents() {
    const data = await this.httpService.get('/events');
    return data;
  }
  @Get('/services')
  @ApiOperation({ summary: '服务' })
  async getServices() {
    const data = await this.httpService.get('/services');
    return data;
  }
  @Get('/history/period/:timestamp')
  @ApiOperation({ summary: '历史状态变化' })
  async getPeriod(@Param('timestamp') timestamp: string) {
    const data = await this.httpService.get(`/history/period/${timestamp}`);
    return data;
  }
  @Get('/logbook')
  @ApiOperation({ summary: '日志' })
  async getLogbook(@Param('timestamp') timestamp: string) {
    const data = await this.httpService.get(`/logbook/${timestamp}`);
    return data;
  }
  @Get('/error_log')
  @ApiOperation({ summary: '错误日志' })
  async getError() {
    const data = await this.httpService.get(`/error_log`);
    return data;
  }
  @Get('/states')
  @ApiOperation({ summary: '设备状态' })
  async getStates() {
    const data = await this.httpService.get(`/states`);
    return data;
  }
  @Get('/states/:id')
  @ApiOperation({ summary: '设备状态' })
  async getStatesById(@Param('id') id: string) {
    const data = await this.httpService.get(`/states/${id}`);
    return data;
  }
  @Get('/calendars')
  @ApiOperation({ summary: '日历' })
  async getCalendars() {
    const data = await this.httpService.get(`/calendars`);
    return data;
  }
  @Get('/calendars/:id')
  @ApiOperation({ summary: '日历详情' })
  async getCalendarsById(@Param('id') id: string) {
    const data = await this.httpService.get(`/calendars/${id}`);
    return data;
  }
}
