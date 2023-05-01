import { ApiProperty } from '@nestjs/swagger';
import { Profile } from '@prisma/client';

export class ProfileEntity implements Profile {
  @ApiProperty()
  id: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  currentLevel: string;
  @ApiProperty()
  learnedTopics: number[];
}
