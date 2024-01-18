import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const configService = new ConfigService(); // Instancia independiente para obtener la configuración
  const port = configService.get<number>('PORT') || 3000;

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
      trustProxy: true,
      bodyLimit: 1048576,
    }),
  );
  // habilita los pips de validacion
  app.useGlobalPipes(new ValidationPipe());
  // Configura Swagger
  const config = new DocumentBuilder()
    .setTitle('Api de Moneda de Campio')
    .setDescription('Esta Api sive para cambiar divisas')
    .setVersion('1.0')
    .addBearerAuth(
      { 
        description: `Bearer Token`,
        name: 'Authorization',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header'
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Configura la interfaz Swagger en "/api"
  SwaggerModule.setup('api', app, document);

  await app.listen(port, '0.0.0.0');
}

bootstrap();
