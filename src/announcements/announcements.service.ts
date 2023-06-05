import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementsService {
  constructor(private prisma: PrismaService) {}

  // create(createAnnouncementDto: CreateAnnouncementDto) {
  //   return this.prisma.announcement.create({ data: createAnnouncementDto });
  // }

  findAll() {
    return this.prisma.announcement.findMany();
  }

  findAllOrganizationAnnouncements(id: string) {
    return this.prisma.announcement.findMany({
      where: { organizationId: id },
    });
  }

  findOne(id: string) {
    return this.prisma.announcement.findUnique({ where: { id } });
  }

  // update(id: string, updateAnnouncementDto: UpdateAnnouncementDto) {
  //   return this.prisma.announcement.update({
  //     where: { id },
  //     data: updateAnnouncementDto,
  //   });
  // }

  remove(id: string) {
    return `This action removes a #${id} announcement`;
  }
}
