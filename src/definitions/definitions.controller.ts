import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { DefinitionsService } from './definitions.service';
import { CreateDefinitionDto } from './dto/create-definition.dto';
import { UpdateDefinitionDto } from './dto/update-definition.dto';

@Controller('definitions')
export class DefinitionsController {
  constructor(private readonly definitionsService: DefinitionsService) {}

  @Post()
  create(@Body() createDefinitionDto: CreateDefinitionDto) {
    return this.definitionsService.create(createDefinitionDto);
  }
  @Get()
  findAll() {
    return this.definitionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.definitionsService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDefinitionDto: UpdateDefinitionDto,
  ) {
    return this.definitionsService.update(+id, updateDefinitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.definitionsService.remove(+id);
  }
}
