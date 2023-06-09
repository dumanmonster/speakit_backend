import { ApiProperty } from '@nestjs/swagger';
import { User, Role } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsString } from 'class-validator';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  currentLevel: string;

  @ApiProperty()
  verificationToken: string;

  @ApiProperty()
  language: string;

  @ApiProperty()
  learnedTopics: Array<string>;

  @ApiProperty()
  favoriteDefinitions: Array<string>;

  @ApiProperty()
  isVerified: boolean;

  @Exclude()
  password: string;
}
