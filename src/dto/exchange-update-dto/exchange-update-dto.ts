import { ApiBadRequestResponse, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ExchangeUpdateDto {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Código de la moneda',
        example: 'sol',
    })
    currency: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Tipo de cambio a actualizar para la moneda, especificar codigo de la moneda',
        example: 'dolar',
    })
    currencyToUpdate: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nuevo tipo de cambio a actualizar para la moneda',
        example: 3.6,
    })
    amount: string

}
