import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Test } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Test[]> {
    return this.appService.getHello();
  }
}
