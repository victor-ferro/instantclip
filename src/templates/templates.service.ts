import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataTemplatesDAO } from './dataTemplatesDAO';
import { Template } from './entities/template.entity';
import { Templates } from './entities/templates.entity';
import { MySQLTemplateDAO } from './MySQLTemplateDAO';
import { TemplatesFindOne } from './templatesFindOne';


//var templates;
@Injectable()
export class TemplatesService {

    //NEW FUNCTIONS
    constructor(
        private templateDAO: DataTemplatesDAO,
        private templatesFindOne: TemplatesFindOne
    ){
        //templates = this.templateDAO.findAll()
    }
    findOne3(id: string) {
        var template = this.findAll();
        return this.templatesFindOne.getTemplatesWithTagLengthMoreThan(template, id);
    }
    findAll(): Promise<Template[]>{
        return this.templateDAO.findAll();
    }
    create(template: Template): void{
        return this.templateDAO.create(template);
    }

    findOne(id: string):Promise<Template>{
        return this.templateDAO.findOne(id)
    }

    remove(id: string):Promise<void>{
        return this.templateDAO.remove(id);
    }
}