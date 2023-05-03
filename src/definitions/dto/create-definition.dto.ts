// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateDefinitionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  word: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @Length(2, 2)
  @ApiProperty()
  level: string;

  @IsString()
  @ApiProperty()
  topicId: string;
}
