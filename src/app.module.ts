import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm'
import { Template } from './templates/entities/template.entity';

@Module({
  imports: [TemplatesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ferro-11',
      database: 'instantclip',
      entities: [Template],
      synchronize: true, //TRUE --> only in dev. Change to false in production
      autoLoadEntities: true  //Cada entity registrada con forFeature() del objeto correspondiente sera agregada automaticamente
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
