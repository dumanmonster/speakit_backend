import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DefinitionsModule } from './definitions/definitions.module';

@Module({
  imports: [PrismaModule, DefinitionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
