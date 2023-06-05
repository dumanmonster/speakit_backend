import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService],
  imports: [PrismaModule],
})
export class AnnouncementsModule {}
