import { Template } from "../entities/template.entity";

export interface TemplateDAO {
    findAll(): Promise<Template[]>;
    findOne(id: string): Promise<Template>;
    create(template: Template): void;
    //update(template: Template, id: string): Template[];
    remove(id: string): Promise<void>;
}
