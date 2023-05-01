import { Module } from '@nestjs/common';
import { DefinitionsService } from './definitions.service';
import { DefinitionsController } from './definitions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DefinitionsController],
  providers: [DefinitionsService],
  imports: [PrismaModule],
})
export class DefinitionsModule {}
