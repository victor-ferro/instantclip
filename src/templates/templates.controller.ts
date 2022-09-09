import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Template } from './model/template';

@Controller('templates')
export class TemplatesController {

  templates : Template[]= [
    {name: 'Antonio', id: 'A20', creator: {avatar: "anthony", name: "anthony"}},
    {name: 'Manuel', id: 'A21', creator: {avatar: "mnm", name: "Namunam"}},
    {name: 'Victor', id: 'A22', creator: {avatar: "ferrito", name: "Ferro"}}
  ]
  
  @Post()
  create(@Body() createTemplateDto: Template) {
    this.templates.push(createTemplateDto)
    return this.templates;
  }

  @Get()
  findAll() {
    return this.templates;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templates.find(item => item.id == id)
    //return this.templates.filter(function(item){return item.id == id})
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplateDto: Template) {
    this.templates.forEach(function(item, i){
      if (item.id == id){
        this[i] = updateTemplateDto
      }
    }, this.templates);
    return this.templates;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.templates.forEach(function(item, i){
      if (item.id == id){
        this.splice(i, 1)
      }
    }, this.templates);
  
    return this.templates;
  }
}
