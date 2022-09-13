import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';
import { ConfigModule } from '@nestjs/config'
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { configLoader } from './users/config-loader';

@Module({
  imports: [TemplatesModule, 
    ConfigModule.forRoot({
      load: [configLoader],
    })],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
