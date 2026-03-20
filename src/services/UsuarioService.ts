import { getCustomRepository } from "typeorm";
import { UsuarioRepositories } from "../repositories/UsuarioRepositories";
import { hash } from "bcryptjs";

class UsuarioService{

    async cadastrar(nome: string, login: string, senha: string, firma_id: number){

        const usuarioRepository = getCustomRepository(UsuarioRepositories);

        const senhaHash = await hash(senha, 10);

        const salvarUsuario = usuarioRepository.create( {nome: nome, login: login, senha: senhaHash, firma_id: firma_id} );

        const usuarioSalvar = usuarioRepository.save(salvarUsuario);
        
        return usuarioSalvar

    }

}

export { UsuarioService }