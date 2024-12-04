import { getCustomRepository } from "typeorm";
import { ClienteRepositories } from "../repositories/ClienteRepositories";

class ClienteService{

    async cadastrar(seu_nome: string, seu_email: string){

        const clienteRepository = getCustomRepository(ClienteRepositories);

        const salvarCategoria = clienteRepository.create({seu_nome: seu_nome, seu_email: seu_email});

        const clienteSalvar = clienteRepository.save(salvarCategoria);
        
        if(!clienteSalvar){
            return { error: true, msg: "Erro ao salvar o cliente."};
        }

        return { error: false, msg: "Cliente cadastrado com sucesso", idCadastrado: (await clienteSalvar).id };

    }

    async listarClientes(){

        const clienteRepository = getCustomRepository(ClienteRepositories);

        const clientes = await clienteRepository.query(`select * from cliente`);

        return clientes;

    }

    async listarClientesParam(seu_email: string){

        const clienteRepository = getCustomRepository(ClienteRepositories);

        let dadosClientes = `select * from cliente c where c.seu_email = '${seu_email}'`;

        var filtrarClientes = await clienteRepository.query(dadosClientes);

        return filtrarClientes;

    }

}

export { ClienteService }