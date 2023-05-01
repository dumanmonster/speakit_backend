import { ApiProperty } from '@nestjs/swagger';

export class CreateTopicDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty()
  level: string;
}
