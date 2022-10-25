import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { VersioningType } from '@nestjs/common'
import { TransformInterceptor } from './commn/interceptors/transform.interceptor'
import { AllExceptionFilter } from './commn/exceptions/base.exception.filter'
import { HttpExceptionFilter } from './commn/exceptions/http.exception.filter'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    new FastifyAdapter
  );
  app.enableVersioning({
    type: VersioningType.URI
  });
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionFilter(), new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
