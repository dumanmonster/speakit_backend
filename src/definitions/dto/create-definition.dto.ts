// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreateDefinitionDto {
  @ApiProperty()
  word: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  level: string;

  @ApiProperty()
  topicId: string;
}
