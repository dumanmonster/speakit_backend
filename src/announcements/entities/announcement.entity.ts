import { ApiProperty } from '@nestjs/swagger';
import { Announcement, Format } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class AnnouncementEntity implements Announcement {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  format: Format;

  @ApiProperty()
  organizationId: string | null;

  @ApiProperty()
  entryFee: string;

  @ApiProperty()
  link?: string;
}
