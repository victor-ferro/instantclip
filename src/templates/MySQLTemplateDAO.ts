import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TemplateDAO } from "./interfaces/template-dao.interface";
import { DataSource, Repository } from "typeorm";
import { DataTemplatesDAO } from "./dataTemplatesDAO";
//import { Template } from "./model/template";
import { Templates } from "./entities/templates.entity";
import { Template } from "./entities/template.entity";

@Injectable()
export class MySQLTemplateDAO implements TemplateDAO{
    constructor(
        @InjectRepository(Template)
        private templatesRepository: Repository<Template>,
        //private dataSource: DataSource,
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
        this.templatesRepository.insert(template)
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

    async update(template: Template, id: string): Promise<Template[]> {
        /*await this.templatesRepository.createQueryBuilder()
                .update(Template)
                .set(template)
                .where("id = :id", { id: id })
                .execute()*/

        await this.templatesRepository.update({id}, template)
        return this.findAll()
    }

    /*async createMany(templates: Template[]) {
        const queryRunner = this.dataSource.createQueryRunner();
      
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(templates[0]);
          await queryRunner.manager.save(templates[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
      }*/
}