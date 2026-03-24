import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity("lancamentos")
class Lancamento {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    tipo: string;

    @Column()
    data_hora: Date;

    @Column()
    descricao: string;

    @Column()
    sincronizado: boolean;

    @Column()
    firma_id: number;

    @Column()
    usuario_id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        
    }

}

export { Lancamento };