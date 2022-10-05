import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { Template } from './templates/entities/template.entity';
import { Music } from './templates/entities/music.entity';
import { Templates } from './templates/entities/templates.entity';
import { Slot } from './templates/entities/slot.entity';

@Module({
  imports: [TemplatesModule, AuthModule, UsersModule, 
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'ferro-11',
    database: 'instantclip',
    entities: [User, Template, Music, Templates, Slot],
    //migrations: [],
    migrationsTableName: "custom_migration_table",
    //synchronize: true,   //try to implement Migrations
    autoLoadEntities: true
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //constructor(private dataSoruce: DataSource){}
}
