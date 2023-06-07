import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}

  async create(createTopicDto: CreateTopicDto) {
    return this.prisma.topic.create({ data: createTopicDto });
  }

  findAll() {
    return this.prisma.topic.findMany();
  }
  findTopicDefinitions(id: string) {
    return this.prisma.definition.findMany({ where: { topicId: id } });
  }
  findOne(id: string) {
    return this.prisma.topic.findUnique({ where: { id: id } });
  }

  update(id: string, updateTopicDto: UpdateTopicDto) {
    return this.prisma.topic.update({
      where: { id },
      data: updateTopicDto,
    });
  }

  remove(id: string) {
    return this.prisma.topic.delete({ where: { id } });
  }
}
