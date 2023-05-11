// src/articles/entities/article.entity.ts

import { Topic } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TopicEntity implements Topic {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  level: string;

  @ApiProperty()
  language: string;

  @ApiProperty()
  imageId: string;
}
