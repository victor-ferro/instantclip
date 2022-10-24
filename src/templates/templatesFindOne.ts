import { Injectable } from "@nestjs/common";
import { Template } from "./entities/template.entity";

@Injectable()
export class TemplatesFindOne {
    constructor() {}
  
    getTemplatesWithTagLengthMoreThan(templates: Promise<Template[]>, id: string): Template {
        return templates[0];
    }
  }