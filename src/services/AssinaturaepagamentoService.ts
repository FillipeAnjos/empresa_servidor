import { getCustomRepository } from "typeorm";
import { AssinaturaepagamentoRepositories } from "../repositories/AssinaturaepagamentoRepositories";

class AssinaturaepagamentoService{

    private assinaturaRepository = getCustomRepository(AssinaturaepagamentoRepositories);

    async cadastrar(
        id_cliente: number,
        tipo: string,
        aquisicao: string,
        nome_casal: string,
        data_relacionamento: string,
        hora_relacionamento: string,
        msg: string,
        img1: string,
        img2: string,
        img3: string,
        url_casal: string,
        status: string,
        ativo: boolean,
        moeda: string,
        pais: string,
        img_qrcode: string
    ){

        const assinaturaepagamentoRepository = getCustomRepository(AssinaturaepagamentoRepositories);

        const salvarAssinaturaepagamento = assinaturaepagamentoRepository.create({
                                                id_cliente: id_cliente,
                                                tipo: tipo,
                                                aquisicao: aquisicao,
                                                nome_casal: nome_casal,
                                                data_relacionamento: data_relacionamento,
                                                hora_relacionamento: hora_relacionamento,
                                                msg: msg,
                                                img1: img1,
                                                img2: img2,
                                                img3: img3,
                                                url_casal: url_casal,
                                                status: status,
                                                ativo: ativo,
                                                moeda: moeda,
                                                pais: pais,
                                                img_qrcode: img_qrcode
                                            });

        const assinaturaepagamentoSalvar = assinaturaepagamentoRepository.save(salvarAssinaturaepagamento);
        
        if(!assinaturaepagamentoSalvar){
            return { error: true, msg: "Erro ao salvar o pagamento."};
        }

        return { error: false, msg: "Cadastro realizado com sucesso", idCadastrado: (await assinaturaepagamentoSalvar).id };

    }

    async verificarAtivacao(url_casal: string){

        const assinaturaRepository = this.assinaturaRepository;

        const ass = await assinaturaRepository.createQueryBuilder("assinaturaepagamento")
                                                    .where("url_casal = :url_casal", {url_casal: url_casal})
                                                    .getMany();
                            
        return ass;

    }

    async ativarOAtivo(id: number){

        const assinaturaRepository = this.assinaturaRepository;

        const updateAssPag = assinaturaRepository.createQueryBuilder("assinaturaepagamento")
                                                    .update("assinaturaepagamento")
                                                    .set({ ativo: true })
                                                    .where("id = :id", {id: id})
                                                    .execute();

        if(!updateAssPag){
            return { error: true, msg: "Ocorreu um erro ao atualizar os dados do pagamento."};
        }

        return { error: false, msg: "O status do Ativo foi atualizado com sucesso!"};

    }

    async buscarQRCode(id: number){

        const assinaturaRepository = this.assinaturaRepository;

        let dadosAss = `select * from assinaturaepagamento a where a.id = '${id}'`;

        var filtrarAss = await assinaturaRepository.query(dadosAss);

        return filtrarAss;

    }

}

export { AssinaturaepagamentoService }