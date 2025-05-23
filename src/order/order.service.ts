import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';


@Injectable()
export class OrderService {

  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({data:createOrderDto}) ;
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({where:{id}});
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({where:{id},data:updateOrderDto});
  }

  remove(id: number) {
    return this.prisma.order.delete({where:{id}});
  }
}
