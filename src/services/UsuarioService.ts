import { getCustomRepository } from "typeorm";
import { UsuarioRepositories } from "../repositories/UsuarioRepositories";
import { hash, compare } from "bcryptjs";

class UsuarioService{

    async cadastrar(nome: string, login: string, senha: string, firma_id: number){

        const usuarioRepository = getCustomRepository(UsuarioRepositories);

        const senhaHash = await hash(senha, 10);

        const salvarUsuario = usuarioRepository.create( {nome: nome, login: login, senha: senhaHash, firma_id: firma_id} );

        const usuarioSalvar = usuarioRepository.save(salvarUsuario);
        
        return usuarioSalvar

    }

    async logar(login: string, senha: string){

        const usuarioRepository = getCustomRepository(UsuarioRepositories);

        const user = await usuarioRepository.findOne({login});

        // Verificar se o email existe.
        if(!user){
            var error = { status: false, error: "Email e/ou Senha incorretos." };
            return error;
        }

        // Verificar se a senha está correta
        const senhHash = await compare(senha, user.senha);
        if(!senhHash){
            var error = { status: false, error: "Email e/ou Senha incorretos.." };
            return error;
        }

        var token = Math.random().toString() + "_" + user.id; //'Token-12345678911';

        return { status: true, sucesso: "Usuário logado com sucesso.", id: user.id, nome: user.nome, login: user.login }

    }

}

export { UsuarioService }