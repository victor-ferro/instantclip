import { Injectable, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

/*@Injectable()
class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [__dirname + '/**//*.entity.ts'],
      migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
      migrationsTableName: "custom_migration_table",
      //synchronize: true, //shouldn't be used in production. Useful during debug and development. Indicates if database schema should be auto created on every application launch
      autoLoadEntities: true
    }
  }
}*/
@Module({
  imports: [TemplatesModule, AuthModule, UsersModule, 

  TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [__dirname + '/**/entities/*.entity.ts'],
      migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
      migrationsTableName: "custom_migration_table",
      //synchronize: true, //shouldn't be used in production. Useful during debug and development. Indicates if database schema should be auto created on every application launch
      autoLoadEntities: true
    })
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
