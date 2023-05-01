import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDefinitionDto } from './dto/create-definition.dto';
import { UpdateDefinitionDto } from './dto/update-definition.dto';

@Injectable()
export class DefinitionsService {
  constructor(private prisma: PrismaService) {}

  create(createDefinitionDto: CreateDefinitionDto) {
    return this.prisma.definition.create({ data: createDefinitionDto });
  }
  findAll() {
    return this.prisma.definition.findMany();
  }

  findOne(id: number) {
    return this.prisma.definition.findUnique({ where: { id: id } });
  }
  update(id: number, updateDefinitionDto: UpdateDefinitionDto) {
    return this.prisma.definition.update({
      where: { id },
      data: updateDefinitionDto,
    });
  }
  remove(id: number) {
    return this.prisma.definition.delete({ where: { id } });
  }
}
