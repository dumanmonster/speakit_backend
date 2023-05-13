import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Request } from 'express';
@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}

  async create(createTopicDto: CreateTopicDto, file: Request['file']) {
    const image = await this.prisma.image.create({
      data: {
        filename: file.originalname,
        path: file.path,
        Topic: { connect: { name: createTopicDto.name } },
      },
      include: {
        Topic: true,
      },
    });
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

  async updateImage(id: string, file: Request['file']) {
    const image = await this.prisma.image.create({
      data: {
        filename: file.originalname,
        path: file.path,
        Topic: { connect: { id: id } },
      },
      include: {
        Topic: true,
      },
    });

    return this.prisma.topic.update({
      where: { id },
      data: {
        imageId: image.id,
      },
    });
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
