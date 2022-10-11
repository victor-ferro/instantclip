import { Module } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataTemplatesDAO } from './dataTemplatesDAO';
import { Slot } from './entities/slot.entity';
import { Template } from './entities/template.entity';
import { Templates } from './entities/templates.entity';
import { MySQLTemplateDAO } from './MySQLTemplateDAO';
import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';
import { TemplatesFindOne } from './templatesFindOne';

@Module({
  imports: [TypeOrmModule.forFeature([Template, Templates, Slot])],
  controllers: [TemplatesController],
  providers: [TemplatesService, TemplatesFindOne, MySQLTemplateDAO, DataTemplatesDAO, /*{provide: getRepositoryToken(Template), useValue: mockRepository}*/],
})
export class TemplatesModule {}
