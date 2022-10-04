import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './entities/music.entity';
import { Slot } from './entities/slot.entity';
import { Template } from './entities/template.entity';
import { Templates } from './entities/templates.entity';
import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';

@Module({
  imports: [TypeOrmModule.forFeature([Template, Music, Slot, Templates])],
  controllers: [TemplatesController],
  providers: [TemplatesService]
})
export class TemplatesModule {}
