import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [],
  providers: [],
})
export class ClientModule {}
