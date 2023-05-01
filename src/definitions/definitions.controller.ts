import { Controller, Get, Param } from '@nestjs/common';
import { DefinitionsService } from './definitions.service';

@Controller('definitions')
export class DefinitionsController {
  constructor(private readonly definitionsService: DefinitionsService) {}

  @Get()
  findAll() {
    return this.definitionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.definitionsService.findOne(+id);
  }
}
