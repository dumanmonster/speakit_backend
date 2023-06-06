import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(private prisma: PrismaService) {}

  // organization actions
  create(createOrganizationDto: CreateOrganizationDto) {
    return this.prisma.organization.create({ data: createOrganizationDto });
  }
  findAllAnnouncements(id: string) {
    return this.prisma.organization.findUnique({
      where: { id },
      include: { announcements: true },
    }).announcements;
  }

  findAll() {
    return this.prisma.organization.findMany();
  }
  findOne(id: string) {
    return this.prisma.organization.findUnique({ where: { id } });
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.prisma.organization.update({
      where: { id },
      data: updateOrganizationDto,
    });
  }

  remove(id: string) {
    return this.prisma.organization.delete({ where: { id } });
  }
}
