import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
      JwtModule.register({
        secret: 'randomSecret',
        signOptions: { expiresIn: '5m' },
      }),
    ],
    exports: [JwtModule],
  })
export class JwtConfigModule {}
