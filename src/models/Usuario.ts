import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("usuario")
class Usuario {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    nome: string;

    @Column()
    login: string;

    @Column()
    senha: string;

    @Column()
    firma_id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        
    }

}

export { Usuario };