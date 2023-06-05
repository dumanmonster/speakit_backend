import { ApiProperty } from '@nestjs/swagger';
import { Organization } from '@prisma/client';

export class OrganizationEntity implements Organization {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  industry: string;
}
