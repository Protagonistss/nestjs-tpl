import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { VersioningType } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    new FastifyAdapter
  );
  app.enableVersioning({
    type: VersioningType.URI
  })
  await app.listen(3000);
}
bootstrap();
