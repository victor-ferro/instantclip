import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TemplateDAO } from "./interfaces/template-dao.interface";
import { DataSource, Repository } from "typeorm";
import { DataTemplatesDAO } from "./dataTemplatesDAO";
//import { Template } from "./model/template";
import { Templates } from "./entities/templates.entity";
import { Template } from "./entities/template.entity";
import { Slot } from "./entities/slot.entity";

@Injectable()
export class MySQLTemplateDAO implements TemplateDAO{
    constructor(
        @InjectRepository(Template)
        private templatesRepository: Repository<Template>,
    ){}

    
    async findAll(): Promise<Template[]> {
        return this.templatesRepository.find({
            relations:{
                creator: true,
                template: {
                    slots: true,
                }
            },
        })
        /*return this.templatesRepository.createQueryBuilder("template")
        .leftJoinAndSelect("template.creator", "user")
        .leftJoinAndSelect("template.template", "templates")
        .leftJoinAndSelect("templates.slots", "slot")
        .getMany()*/
    }
    
    
    create(template: Template): void {
        this.templatesRepository.save(template).catch((err: any) => {
            console.log(err)
        })
    }

    findOne(id: string): Promise<Template> {
        return this.templatesRepository.findOne({
            relations:{
                creator: true,
                template: {
                    slots: true
                }
            },
            where:{
                id: id
            }
        })
        //return this.templatesRepository.findOneBy({id: id});
        /*return this.templatesRepository.createQueryBuilder("template")
        .leftJoinAndSelect("template.creator", "user")
        .leftJoinAndSelect("template.template", "templates")
        .leftJoinAndSelect("templates.slots", "slot")
        .where("template.id = :id", { id: id})
        .getOne()*/
    }

    async remove(id: string): Promise<void> {
        await (await this.templatesRepository.delete(id));
    }

    async update(template: Template): Promise<Template[]> {  
        await this.templatesRepository.save(template).catch((err: any) => {
            console.log(err)
        });
        return this.findAll();

         /*await this.templatesRepository.createQueryBuilder()
                .update(Template)
                .set(template)
                .where("id = :id", { id: id })
                .execute()*/
    }

    async createMany(template: Template[]){
        await this.templatesRepository.save(template).catch((err: any) => {
            console.log(err);
        })
    }

}