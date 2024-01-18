// app.module.ts
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FastifyModule } from './configs/fastify/fastify.module';
import { DatabasesModule } from './configs/database/database.module'
import { JwtConfigModule } from './configs/jwt/jwt.module'; // Asegúrate de importar el módulo correcto
import { AuthMiddleware } from './middlewares/jwt/jwt.middleware';
import { ExchangeController } from './controllers/exchange.controller';
import { ControllersModule } from './controllers/controllers.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ConfigModule, FastifyModule, DatabasesModule, JwtConfigModule, ControllersModule, ServicesModule]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      ExchangeController
      // se agregan mas rutas segun sea necesario
    );
  }
}