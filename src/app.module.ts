import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefinitionsModule } from './definitions/definitions.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TopicsModule } from './topics/topics.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DefinitionsModule, UsersModule, AuthModule, TopicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
