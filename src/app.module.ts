import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';

@Module({
  imports: [TemplatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
