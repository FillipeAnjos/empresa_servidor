import { getCustomRepository, getConnection } from "typeorm";
import { LancamentoRepositories } from "../repositories/LancamentoRepositories";

class LancamentoService{

    async cadastrar(id: number | null, tipo: string, data_hora: string, descricao: string, sincronizado: boolean, firma_id: number, usuario_id: number){

        /*const lacamentoRepository = getCustomRepository(LancamentoRepositories);

        const salvarLancamento = lacamentoRepository.create( { tipo: tipo, data_hora: data_hora, descricao: descricao, sincronizado: sincronizado, firma_id: firma_id, usuario_id: usuario_id } );
        
        const lacamentoSalvar = lacamentoRepository.save(salvarLancamento);
        
        return lacamentoSalvar*/

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        var sql = id == null
                    ? `INSERT INTO lancamentos (tipo, data_hora, descricao, sincronizado, firma_id, usuario_id)VALUES ('${tipo}', '${data_hora}', '${descricao}', ${sincronizado}, ${firma_id}, ${usuario_id})`
                    : `UPDATE lancamentos SET tipo = '${tipo}', data_hora = '${data_hora}', descricao = '${descricao}', sincronizado = ${sincronizado}, firma_id = ${firma_id}, usuario_id = ${usuario_id} WHERE id = ${id}`

        await queryRunner.manager.query(sql);

        const idCadastrado = await queryRunner.manager.query("select max(id) as id from lancamentos");

        await queryRunner.commitTransaction();

        await queryRunner.release();

        return { error: false, msg: "Usuário cadastrado com sucesso", idCadastrado: idCadastrado[0].id };

    }

    async listar(){

        const lancamentoRepository = getCustomRepository(LancamentoRepositories);

        const lancamento = await lancamentoRepository.createQueryBuilder("lancamentos").getMany();

        return lancamento;

    }

}

export { LancamentoService }