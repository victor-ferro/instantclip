import { Injectable, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplatesModule } from './templates/templates.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { RolesModule } from './roles/roles.module';
import * as cookieParser from 'cookie-parser';
import { UsersController } from './users/users.controller';
import { TemplatesController } from './templates/templates.controller';

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
  }), RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cookieParser())
      .forRoutes(UsersController, TemplatesController)
  }

}
