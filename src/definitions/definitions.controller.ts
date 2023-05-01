import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DefinitionsService } from './definitions.service';
import { CreateDefinitionDto } from './dto/create-definition.dto';
import { UpdateDefinitionDto } from './dto/update-definition.dto';
import { DefinitionEntity } from './entities/definition.entity';

@Controller('definitions')
@ApiTags('definitions')
export class DefinitionsController {
  constructor(private readonly definitionsService: DefinitionsService) {}

  @Post()
  @ApiCreatedResponse({ type: DefinitionEntity })
  create(@Body() createDefinitionDto: CreateDefinitionDto) {
    return this.definitionsService.create(createDefinitionDto);
  }

  @Get()
  @ApiOkResponse({ type: DefinitionEntity, isArray: true })
  findAll() {
    return this.definitionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DefinitionEntity })
  findOne(@Param('id') id: string) {
    return this.definitionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DefinitionEntity })
  update(
    @Param('id') id: string,
    @Body() updateDefinitionDto: UpdateDefinitionDto,
  ) {
    return this.definitionsService.update(id, updateDefinitionDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DefinitionEntity })
  remove(@Param('id') id: string) {
    return this.definitionsService.remove(id);
  }
}
