import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';


@Injectable()
export class ClientService {


  create(createClientDto: CreateClientDto) {
    return this.prisma.client.create({data:createClientDto});
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({where:{id}});
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({where:{id},data:updateClientDto});
  }

  remove(id: number) {
    return this.prisma.client.delete({where:{id}});
  }
}
