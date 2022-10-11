import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DataTemplatesDAO } from './dataTemplatesDAO';
import { Template } from './entities/template.entity';
import { MySQLTemplateDAO } from './MySQLTemplateDAO';
import { TemplatesService } from './templates.service';
import { TemplatesFindOne } from './templatesFindOne';


@Controller('templates')
export class TemplatesController {
    constructor(
      private readonly templatesService: TemplatesService,
      private templateDAO: MySQLTemplateDAO,
      private templateOperator: TemplatesFindOne){
        this.templatesService = new TemplatesService(this.templateDAO, this.templateOperator);
    }
  
  @Post()
  create(@Body() createTemplateDto: Template) {
    return this.templatesService.create(createTemplateDto);
  }
  

  @Get()
  findAll() {
    return this.templatesService.findAll();
  }

  @Get('new')
  findAll2() {
    return this.templatesService.findAll();
  }

 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id)
    //return this.templatesService['template'].filter(function(item){return item.id == id})
  }

  @Get('new/:id')
  findOne3(@Param('id') id: string) {
    return this.templatesService.findOne3(id)
  }

 /* @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id)
    //return this.templatesService['template'].filter(function(item){return item.id == id})
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplateDto: Template) {
    return this.templatesService.update(id, updateTemplateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templatesService.remove(id);
  }*/
}
