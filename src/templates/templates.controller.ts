import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
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
  }
}
