import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DefinitionsService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    return this.prisma.definition.findMany();
  }

  findOne(id: number) {
    return this.prisma.definition.findUnique({ where: { id: id } });
  }
}
