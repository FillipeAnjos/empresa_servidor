import { Request, Response } from "express";
import { LancamentoService } from "../services/LancamentoService";

class LancamentoController{

    async cadastrarLancamento(request: Request, response: Response) {

        const tipo = request.body.tipo;
        const data_hora = request.body.data_hora;
        const descricao = request.body.descricao;
        const sincronizado = request.body.sincronizado;
        const firma_id = request.body.firma_id;
        const usuario_id = request.body.usuario_id;
        
        const lancamentoService = new LancamentoService();
        
        if (tipo == '' || data_hora == '' || descricao == '' || sincronizado == null || firma_id == 0 || usuario_id == 0) {
            
            return {
                status: 400,
                msg: "Todos dos campos deverão ser informados!",
            }
        }

        const lacamento: any = await lancamentoService.cadastrar(tipo, data_hora, descricao, sincronizado, firma_id, usuario_id);

        if(!lacamento){
            return { status: 404, msg: "Erro ao salvar o lançamento."};
        }

        if(lacamento.status == 409){
            return lacamento;
        }

        return { status: 200, msg: "Lançamento cadastrado com sucesso", lacamento: lacamento};
        
    }

}

export { LancamentoController }