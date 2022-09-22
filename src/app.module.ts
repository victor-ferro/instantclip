import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm'

@Module({
  imports: [TemplatesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'instantclip',
      entities: [],
      synchronize: true //TRUE --> only in dev. Pass to false in production
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
