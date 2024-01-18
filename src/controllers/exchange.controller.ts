import { Body, Controller, Get, Header, Headers, Put, Query } from '@nestjs/common';
import { ExchangeService } from '../services/exchange.service';
import { ExchangeUpdateDto } from 'src/dto/exchange-update-dto/exchange-update-dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExchangeGetDto } from 'src/dto/exchange-get-dto/exchange-get-dto';
import { HeaderDto } from 'src/dto/header-dto/header-dto';

@Controller('exchange')
@ApiTags('exchange')
export class ExchangeController {
  constructor(
    private exchangeService: ExchangeService
    ) {}

    @Get('/change')
    @ApiResponse({ status: 200, description: 'Cambio Realizado' })
    @ApiBadRequestResponse({ description: 'Hubo al Cambiar la monea' })
    @ApiBearerAuth('access-token')
    async getExchange(@Query() exchangeDto: ExchangeGetDto): Promise<any> {
      return await this.exchangeService.getExchange(exchangeDto.currencyFrom, exchangeDto.currencyTo, exchangeDto.amount)
    }

    @Put('/update')
    @ApiResponse({ status: 200, description: 'Divisa Actualizada' })
    @ApiBadRequestResponse({ description: 'Hubo un error al actualizar la divisa' })
    @ApiBearerAuth('access-token')
    @ApiBody({ type: ExchangeUpdateDto })
    async updateExchange(@Body() exchangeDto: ExchangeUpdateDto) {
      return await this.exchangeService.updateExchange(exchangeDto.currency, exchangeDto.currencyToUpdate, exchangeDto.amount)
    }

    @Get('/exchanges')
    async getAllCurrencies(): Promise<any> {

      // const client = await this.redisService.getClient();
      // const resposne = await client.get('hello');

      const response = await this.exchangeService.getallExchanges();
      return response

    }
}
