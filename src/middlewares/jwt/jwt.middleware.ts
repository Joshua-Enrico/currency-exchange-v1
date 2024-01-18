// jwt.middleware.ts
import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization
    const token = authorizationHeader ? authorizationHeader.replace('Bearer ', '') : null;
    if (token) {
      try {
        // Verificar y decodificar el token
        this.jwtService.verify(token);
        next();
      } catch (error) {
        throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED);
      }
    } else {
      throw new HttpException('Token no proporcionado', HttpStatus.UNAUTHORIZED);
    }
  }
}
