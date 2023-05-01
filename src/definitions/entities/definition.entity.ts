// src/articles/entities/article.entity.ts

import { Definition } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DefinitionEntity implements Definition {
  @ApiProperty()
  id: number;

  @ApiProperty()
  word: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  level: string;
}
