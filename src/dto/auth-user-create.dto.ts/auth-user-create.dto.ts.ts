import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class AuthUserCreateDtoTs {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nombre de Usuario',
        example: 'pepe',
    })
    username: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Contraseña de Usuario',
        example: '123',
    })
    passsword: string;
}
