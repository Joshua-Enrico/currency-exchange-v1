import { Module } from '@nestjs/common';
import { DatabasesModule } from './database/database.module';
import { JwtConfigModule } from './jwt/jwt.module';

@Module({
    imports: [DatabasesModule, JwtConfigModule],
    exports: []
})
export class ConfigsModule {}
