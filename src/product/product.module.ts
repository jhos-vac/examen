import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [],
  providers: [],
})
export class ProductModule {}
