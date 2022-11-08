import { Slot } from "../entities/slot.entity";
import { Template, Templates } from "../model/template";


export interface TemplateDAO {
    findAll(): Promise<Template[]>;
    findOne(id: string): Promise<Template>;
    create(template: Template): void;
    update(template: Template, id: string): Promise<Template[]>;
    remove(id: string): Promise<void>;
    createMany(templates: Template[]): void;
}
