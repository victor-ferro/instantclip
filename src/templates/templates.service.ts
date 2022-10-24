import { Inject, Injectable } from '@nestjs/common';
import { TemplateDAO } from './interfaces/template-dao.interface';
import { Template } from './model/template';
import { TemplatesFindOne } from './templatesFindOne';

@Injectable()
export class TemplatesService {
    constructor(
        @Inject('TemplateDAO')
        private templateDAO: TemplateDAO,
        private templatesFindOne: TemplatesFindOne
    ){}

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

    update(id: string, template: Template): Promise<Template[]>{
        return this.templateDAO.update(template, id);
    }
}