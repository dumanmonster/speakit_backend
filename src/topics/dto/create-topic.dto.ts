import { ApiProperty } from '@nestjs/swagger';

export class CreateTopicDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  level: string;

  @ApiProperty()
  definitionIds: string[];
}
