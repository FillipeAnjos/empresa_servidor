import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("assinaturaepagamento")
class Assinaturaepagamento {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    id_cliente: number;

    @Column()
    tipo: string;

    @Column()
    aquisicao: string;

    @Column()
    nome_casal: string;

    @Column()
    data_relacionamento: string;

    @Column()
    hora_relacionamento: string;

    @Column()
    msg: string;

    @Column()
    img1: string;

    @Column()
    img2: string;

    @Column()
    img3: string;

    @Column()
    url_casal: string;

    @Column()
    status: string;

    @Column()
    ativo: boolean;

    @Column()
    moeda: string;

    @Column()
    pais: string;

    @Column()
    img_qrcode: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Assinaturaepagamento };