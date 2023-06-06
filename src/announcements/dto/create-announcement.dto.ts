import { ApiProperty } from '@nestjs/swagger';
import { Format } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAnnouncementDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @ApiProperty()
  format: Format;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  entryFee: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  organizationId: string;
}
