import { Request, Response } from "express";
import { AssinaturaepagamentoService } from "../services/AssinaturaepagamentoService";

class AssinaturaepagamentoController{

    async cadastrarAssinaturaepagamento(request: Request, response: Response) {

        const id_cliente = request.body.id_cliente;
        const tipo = request.body.tipo;
        const aquisicao = request.body.aquisicao;
        const nome_casal = request.body.nome_casal;
        const data_relacionamento = request.body.data_relacionamento;
        const hora_relacionamento = request.body.hora_relacionamento;
        const msg = request.body.msg;
        const img1 = request.body.img1;
        const img2 = request.body.img2;
        const img3 = request.body.img3;
        const url_casal = request.body.url_casal;
        const status = request.body.status;
        const ativo = request.body.ativo;
        const moeda = request.body.moeda;
        const pais = request.body.pais;
        const img_qrcode = request.body.img_qrcode;

        const assinaturaepagamentoService = new AssinaturaepagamentoService();

        // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript

        const assinaturaepagamento = assinaturaepagamentoService.cadastrar(
                                        id_cliente,
                                        tipo,
                                        aquisicao,
                                        nome_casal,
                                        data_relacionamento,
                                        hora_relacionamento,
                                        msg,
                                        img1,
                                        img2,
                                        img3,
                                        url_casal,
                                        status,
                                        ativo,
                                        moeda,
                                        pais,
                                        img_qrcode
                                    );

        return assinaturaepagamento;
        
    }

    async verificarAtivacaoAssinaturaepagamento(request: Request, response: Response) {

        const url_casal = request.body.url_casal;

        const assinaturaepagamentoService = new AssinaturaepagamentoService();

        const ass = assinaturaepagamentoService.verificarAtivacao(url_casal);

        return ass;
    
    }

    async ativarOAtivoAssinaturaepagamento(request: Request, response: Response) {

        const id = request.body.id;

        const assinaturaepagamentoService = new AssinaturaepagamentoService();

        const ass = assinaturaepagamentoService.ativarOAtivo(id);

        return ass;
    
    }

    async buscarQRCodeAssinaturaepagamento(request: Request, response: Response) {

        const id = request.body.id;

        const assinaturaepagamentoService = new AssinaturaepagamentoService();

        const ass = assinaturaepagamentoService.buscarQRCode(id);

        return ass;
    
    }

}

export { AssinaturaepagamentoController }