// src/users/dto/create-user.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;

  @ApiProperty({ required: false })
  role: Role;

  @IsString()
  @MaxLength(2)
  @ApiProperty()
  language: string;

  @ApiProperty()
  profileImg?: string;
}
