import { Request, Response } from "express";
import { LancamentoService } from "../services/LancamentoService";

class LancamentoController{

    async cadastrarLancamento(request: Request, response: Response) {

        const id = !request.body.id || request.body.id == undefined ? null : request.body.id;
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

        const lancamento: any = await lancamentoService.cadastrar(id, tipo, data_hora, descricao, sincronizado, firma_id, usuario_id);

        if(!lancamento){
            return { status: 404, msg: "Erro ao salvar o lançamento."};
        }

        if(lancamento.status == 409){
            return lancamento;
        }

        return lancamento;
        
    }

    async listarLancamento() {

        const lancamentoService = new LancamentoService();

        const lancamento = lancamentoService.listar();

        if(!lancamento){
            return false;
        }

        return lancamento;
        
    }

}

export { LancamentoController }