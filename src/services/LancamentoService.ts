import { getCustomRepository } from "typeorm";
import { LancamentoRepositories } from "../repositories/LancamentoRepositories";

class LancamentoService{

    async cadastrar(tipo: string, data_hora: string, descricao: string, sincronizado: boolean, firma_id: number, usuario_id: number){

        const lacamentoRepository = getCustomRepository(LancamentoRepositories);

        const salvarLancamento = lacamentoRepository.create( { tipo: tipo, data_hora: data_hora, descricao: descricao, sincronizado: sincronizado, firma_id: firma_id, usuario_id: usuario_id } );

        const lacamentoSalvar = lacamentoRepository.save(salvarLancamento);
        
        return lacamentoSalvar

    }

}

export { LancamentoService }