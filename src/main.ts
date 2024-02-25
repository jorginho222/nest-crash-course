import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // let pass only the requested dto body parts
      forbidNonWhitelisted: true, // send error when body structure is different than required dto
    }),
  );
  await app.listen(3000);
}

bootstrap();
