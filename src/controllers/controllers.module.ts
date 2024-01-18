import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from 'src/services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtConfigModule } from 'src/configs/jwt/jwt.module';
import { ExchangeRates } from 'src/entities/currency.entity';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from 'src/services/exchange.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, ExchangeRates]), JwtConfigModule],
    controllers: [AuthController, ExchangeController],
    providers: [AuthService, ExchangeService]
})
export class ControllersModule {}
