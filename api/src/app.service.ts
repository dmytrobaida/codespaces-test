import { Injectable } from '@nestjs/common';
import { Test } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  private prisma = new PrismaClient();

  async getHello(): Promise<Test[]> {
    await this.prisma.test.create({
      data: {
        title: crypto.randomUUID(),
      },
    });

    const allRecords = await this.prisma.test.findMany();

    return allRecords;
  }
}
