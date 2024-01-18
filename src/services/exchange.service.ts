import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedisService } from 'nestjs-redis';
import { ExchangeRates } from 'src/entities/currency.entity';

@Injectable()
export class ExchangeService {

    constructor(
        private readonly redisService: RedisService,
        @InjectRepository(ExchangeRates)
        private readonly exchangeRatesRepository: any,
    ) { }


    async getallExchanges(): Promise<any[]> {
        return await this.exchangeRatesRepository.find()
    }

    async getExchange(currencyFromId: string, currencyToId: string, amount: number): Promise<any> {
        const redisClient = this.redisService.getClient();
        const exchangeFromRedis = await this.getExchangeFromRedis(redisClient, currencyFromId);
        let exchangeRate: number;
        let currencyFrom: any;

        if (exchangeFromRedis) {
            currencyFrom = exchangeFromRedis
        } else {
            currencyFrom = await this.exchangeRatesRepository.findOne({
                where: { currency: currencyFromId }
            });
            currencyFrom && await redisClient.set(currencyFromId, JSON.stringify(currencyFrom));
        }

        if (!currencyFrom) return { 'error': `No se encontro la divisa ${currencyFromId}` }

        exchangeRate = currencyFrom.exchangeRates[currencyToId]

        if (!exchangeRate) return { 'error': `No se encontro el tipo de cambio de ${currencyToId} para ${currencyFromId}` }

        return {
            gotFrom: exchangeFromRedis ? 'FromRedis' : 'FromMySql',
            exchangeFrom: currencyFromId,
            exchangeTo: currencyToId,
            exchange: exchangeRate * amount,
            exchangeRate
        }
    }

    private async getExchangeFromRedis(redisClient: any, currencyFromId: string): Promise<any | null> {
        const exchangeFromRedis = await redisClient.get(currencyFromId);
        return exchangeFromRedis ? JSON.parse(exchangeFromRedis) : null;
    }

    async createExchange(currencyFrom: string, currencyTo: string): Promise<any> { }

    async updateExchange(currencyId: string, exchangeToUpdate: string, value: string): Promise<any> {
        const redisClient = this.redisService.getClient();
        try {
            const result = await this.exchangeRatesRepository
            .createQueryBuilder()
            .update()
            .set({
                exchangeRates: () => `JSON_SET(
                    IFNULL(exchangeRates, '{}'),
                    '$.${exchangeToUpdate}', 
                    CAST(:value AS DECIMAL(10, 2))
                )`,
            })
            .where('currency = :currencyId', { currencyId })
            .setParameter('value', value)
            .execute();
        
            console.log(result)
            // Verificar si se actualizó correctamente
            if (result && result.affected > 0) {
                const currencyFrom = await this.exchangeRatesRepository.findOne({
                    where: { currency: currencyId }
                });
                currencyFrom && await redisClient.set(currencyId, JSON.stringify(currencyFrom));
                return { success: true, message: `Se actualizó ${exchangeToUpdate} correctamente.` };
            } else {
                return { success: false, message: `No se encontró el registro con currencyId: ${currencyId}.` };
            }
        } catch (error) {
            // Manejar errores
            return { success: false, message: `Error al actualizar ${exchangeToUpdate}. Detalles: ${error.message}` };
        }
    }
}
