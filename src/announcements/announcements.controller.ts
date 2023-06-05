import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { AnnouncementEntity } from './entities/announcement.entity';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  // @Post()
  // @ApiCreatedResponse({ type: AnnouncementEntity })
  // create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
  //   return this.announcementsService.create(createAnnouncementDto);
  // }

  @Get()
  @ApiOkResponse({ type: AnnouncementEntity, isArray: true })
  findAll() {
    return this.announcementsService.findAll();
  }

  @Get('/organization')
  @ApiOkResponse({ type: AnnouncementEntity, isArray: true })
  findAllOrganizationAnnouncements(@Param('orgId') orgId: string) {
    return this.announcementsService.findAllOrganizationAnnouncements(orgId);
  }

  @Get(':id')
  @ApiOkResponse({ type: AnnouncementEntity })
  findOne(@Param('id') id: string) {
    return this.announcementsService.findOne(id);
  }

  // @Patch(':id')
  // @ApiOkResponse({ type: AnnouncementEntity })
  // update(
  //   @Param('id') id: string,
  //   @Body() updateAnnouncementDto: UpdateAnnouncementDto,
  // ) {
  //   return this.announcementsService.update(id, updateAnnouncementDto);
  // }

  @Delete(':id')
  @ApiOkResponse({ type: AnnouncementEntity })
  remove(@Param('id') id: string) {
    return this.announcementsService.remove(id);
  }
}
