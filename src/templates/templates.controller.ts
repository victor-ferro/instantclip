import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DataTemplatesDAO } from './dataTemplatesDAO';
import { Slot } from './entities/slot.entity';
import { Templates } from './entities/templates.entity';
import { Template } from './model/template';

import { MySQLTemplateDAO } from './mySQLTemplateDAO';
import { TemplatesService } from './templates.service';
import { TemplatesFindOne } from './templatesFindOne';


@Controller('templates')
export class TemplatesController {
    constructor(
      private readonly templatesService: TemplatesService
      ){}
  
  @Post()
  create(@Body() createTemplateDto: Template) {
    return this.templatesService.create(createTemplateDto);
  }

  @Post("many")
  createMany(@Body() createTemplatesDto: Template[]) {
    return this.templatesService.createMany(createTemplatesDto);
  }

  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

 @UseGuards(JwtAuthGuard)
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id);
  }

  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplateDto: Template) {
    return this.templatesService.update(id, updateTemplateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templatesService.remove(id);
  }
}
