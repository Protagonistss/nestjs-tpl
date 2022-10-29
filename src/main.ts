import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common'
import { TransformInterceptor } from './commn/interceptors/transform.interceptor'
import { AllExceptionFilter } from './commn/exceptions/base.exception.filter'
import { HttpExceptionFilter } from './commn/exceptions/http.exception.filter'
import { generateDocument } from './doc'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    new FastifyAdapter
  );
  app.enableVersioning({
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
    type: VersioningType.URI
  });
  generateDocument(app)
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionFilter(), new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
