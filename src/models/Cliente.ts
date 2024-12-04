import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("cliente")
class Cliente {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    seu_nome: string;

    @Column()
    seu_email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Cliente };