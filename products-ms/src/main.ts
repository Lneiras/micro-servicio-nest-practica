import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import {ValidationPipe} from '@nestjs/common';
import { envs } from './config/envs.js';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remueve todo lo que no esta incluido en los DTO´s
      forbidNonWhitelisted: true, // Retorna una error 400 bad request si hay propiedades en el objeto no requeridas
    })
  );

  await app.listen( envs.port);
  console.log(`Products microservice is running on: ${envs.port}`);
}
await bootstrap();


