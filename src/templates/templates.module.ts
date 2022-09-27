import { Module } from '@nestjs/common';
import { Template } from './entities/template.entity';
import { TemplatesController } from './templates.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TemplatesService } from './templates.service';

@Module({
  imports:[TypeOrmModule.forFeature([Template])],
  controllers: [TemplatesController],
  providers: [TemplatesService]
})
export class TemplatesModule {}
