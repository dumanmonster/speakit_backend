import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TopicEntity } from './entities/topic.entity';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('topics')
@ApiTags('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post()
  @ApiCreatedResponse({ type: TopicEntity })
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createTopicDto: CreateTopicDto) {
    return this.topicsService.create(createTopicDto);
  }

  @Get()
  @ApiOkResponse({ type: TopicEntity, isArray: true })
  findAll() {
    return this.topicsService.findAll();
  }
  @Get('definitions/:id')
  @ApiOkResponse({ type: TopicEntity, isArray: true })
  findAllDefinitions(@Param('id') id: string) {
    return this.topicsService.findTopicDefinitions(id);
  }
  @Get(':id')
  @ApiOkResponse({ type: TopicEntity })
  findOne(@Param('id') id: string) {
    return this.topicsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TopicEntity })
  update(@Param('id') id: string, @Body() updateTopicDto: UpdateTopicDto) {
    return this.topicsService.update(id, updateTopicDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TopicEntity })
  remove(@Param('id') id: string) {
    return this.topicsService.remove(id);
  }
}
