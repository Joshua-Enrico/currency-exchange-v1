import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiBadRequestResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthUserCreateDtoTs } from 'src/dto/auth-user-create.dto.ts/auth-user-create.dto.ts';

export class CreateUserDto {
    username: string;
    password: string;
  }

@Controller('user')
@ApiTags('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/auth')
    @ApiResponse({ status: 200, description: 'Usuario autenticado exitosamente' })
    @ApiBadRequestResponse({ description: 'Petición incorrecta. Verifica el formato de entrada.' })
    async authUser(@Body() authUserDto: AuthUserCreateDtoTs) {
        return await this.authService.authUser(authUserDto.username, authUserDto.passsword)
    }

    @Post('/create')
    @ApiResponse({ status: 200, description: 'Creado Correctamente' })
    @ApiBadRequestResponse({ description: 'Hubo algun tipo de error en la creacion del usuario' })
    async createUser(@Body() authUserDto: AuthUserCreateDtoTs) {
        return await this.authService.createUser(authUserDto.username, authUserDto.passsword);
    }
}
