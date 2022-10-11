import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesModule } from '../../src/templates/templates.module';
import { INestApplication } from '@nestjs/common';
import { TemplatesService } from '../../src/templates/templates.service';
import { DataTemplatesDAO } from '../../src/templates/dataTemplatesDAO';
import { TemplatesFindOne } from '../../src/templates/templatesFindOne';
import { AppModule } from '../../src/app.module';
import { TemplatesController } from '../../src/templates/templates.controller';
//import { AuthGuard } from '@nestjs/passport';

describe('Templates', () => {
    let app: INestApplication;
    let templateDAO = new DataTemplatesDAO();
    let businessLogicTemplate = new TemplatesFindOne();
    let templatesService = new TemplatesService(templateDAO, businessLogicTemplate)
  
    beforeAll(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        imports: [AppModule, TemplatesModule],
        
      })
        //.overrideGuard(AuthGuard('jwt'))
        //.useValue('')
        .overrideProvider(TemplatesService)
        .useValue(templatesService)
        .compile();
  
      app = moduleRef.createNestApplication();
      await app.init();  
    });

    it('/templates (GET)', () => {
      return request(app.getHttpServer())
        .get('/templates')
        .expect(200)
        .expect(templatesService.findAll());
    });
    it('/templates/:id (GET)', () => {
        return request(app.getHttpServer())
          .get('/templates/A22')
          .expect(200)
          .expect(templatesService.findOne('A22'));
      });
    /*it('/templates (POST)', () => {
        return request(app.getHttpServer())
          .post('/templates')
          .send(templates[1])
          .expect(201)
          .expect(templatesService.create(templates[1]))
      });
      it('/templates/:id (PATCH)', () => {
        return request(app.getHttpServer())
          .patch('/templates/A22')
          .send(templates[1])
          .expect(200)
          .expect(templatesService.update('A22', templates[1]))
      });
      it('/templates/:id (DELETE)', () => {
        return request(app.getHttpServer())
          .delete('/templates/A22')
          .expect(200)
          .expect(templatesService.remove('A22'))
      });*/

    afterAll(async () => {
      await app.close();
    });
  });