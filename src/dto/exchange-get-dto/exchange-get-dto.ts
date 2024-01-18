import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';


export class ExchangeGetDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Código de la moneda de origen',
        example: 'sol',
    })
    currencyFrom: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Código de la moneda de destino',
        example: 'dolar',
    })
    currencyTo: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Monto de la moneda',
        example: 123,
    })
    amount: number

}
