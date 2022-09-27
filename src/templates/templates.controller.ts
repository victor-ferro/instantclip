import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Template } from './model/template';
import { TemplatesService } from './templates.service';

@Controller('templates')
export class TemplatesController {
    constructor(private readonly templatesService: TemplatesService){}
  
  @Post()
  create(@Body() createTemplateDto: Template) {
    return this.templatesService.create(createTemplateDto);
  }

  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplateDto: Template) {
    return this.templatesService.update(id, updateTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templatesService.remove(id);
  }
}