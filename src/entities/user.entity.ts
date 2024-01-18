import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
