import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Template } from "./entities/template.entity";
import { TemplateDAO } from "./interfaces/template-dao.interface";
import { DataSource, Repository } from "typeorm";
import { DataTemplatesDAO } from "./dataTemplatesDAO";

@Injectable()
export class MySQLTemplateDAO extends DataTemplatesDAO{
    constructor(
        @InjectRepository(Template)
        private templatesRepository: Repository<Template>,
        //private dataSource: DataSource,
    ){super()}

    
    async findAll(): Promise<Template[]> {
        return this.templatesRepository.find({
            relations:{
                template: true
            }
        });
        /*return this.templatesRepository.createQueryBuilder("template")
        .innerJoinAndSelect("template.template", "templates")
        .getMany()*/
    }
    
    
    create(template: Template): void {
        this.templatesRepository.insert(template)
    }

    findOne(id: string): Promise<Template> {
        return this.templatesRepository.findOneBy({id});
    }

    async remove(id: string): Promise<void> {
        await this.templatesRepository.delete(id);
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