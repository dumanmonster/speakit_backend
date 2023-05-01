// src/articles/entities/article.entity.ts

import { Definition } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DefinitionEntity implements Definition {
  @ApiProperty()
  id: string;

  @ApiProperty()
  word: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  level: string;

  @ApiProperty()
  topicId: string;
}
