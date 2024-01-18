// database.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-db',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true
    }),
    RedisModule.register({
      host: 'redis',
      port: 6379,
    onClientReady: (client) => {
      // La conexión a Redis se ha establecido con éxito.
      console.log('Connected to Redis successfully!');
    },
  }),
  ],
  exports: [RedisModule]
})
export class DatabasesModule {}