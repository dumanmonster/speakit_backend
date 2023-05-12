import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTopicDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @MaxLength(2)
  @ApiProperty()
  level: string;

  @IsString()
  @MaxLength(2)
  @ApiProperty()
  language: string;

  @ApiProperty()
  imageId: string;
}
