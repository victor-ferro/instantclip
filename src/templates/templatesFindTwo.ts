import { Injectable } from "@nestjs/common";
import { Template } from "./entities/template.entity";

import { TemplatesFindOne } from "./templatesFindOne";

@Injectable()
export class TemplatesFindTwo extends TemplatesFindOne{
    getTemplatesWithTagLengthMoreThan(templates: Promise<Template[]>, id: String) {
        return templates[1]
    }
}