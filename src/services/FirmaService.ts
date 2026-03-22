import { getCustomRepository } from "typeorm";
import { FirmaRepositories } from "../repositories/FirmaRepositories";

class FirmaService{

    async cadastrar(nome: string){

        const firmaRepository = getCustomRepository(FirmaRepositories);

        const salvarFirma = firmaRepository.create( {nome: nome} );

        const firmaSalvar = firmaRepository.save(salvarFirma);
        
        if(!firmaSalvar){
            return { error: true, msg: "Erro ao salvar a firma."};
        }

        return { error: false, msg: "Firma cadastrada com sucesso", idCadastrado: (await firmaSalvar).id };

    }

    async listar(){

        const firmaRepository = getCustomRepository(FirmaRepositories);

        const firma = await firmaRepository.createQueryBuilder("firma").getMany();

        return firma;

    }

}

export { FirmaService }