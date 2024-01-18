import { Module } from '@nestjs/common';
import { JwtConfigModule } from 'src/configs/jwt/jwt.module';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeService } from './exchange.service';
import { ExchangeRates } from 'src/entities/currency.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, ExchangeRates]), JwtConfigModule],
    providers: [AuthService, ExchangeService]
})
export class ServicesModule {}
