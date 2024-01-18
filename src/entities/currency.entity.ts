import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class ExchangeRates {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar' })
    currency: string;

    @Column({ type: 'varchar'})
    currencyId: string;
  
    @Column({ type: 'json' }) 
    exchangeRates: Record<string, number>; // Estructura de datos para tasas de cambio
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
