import { getCustomRepository } from "typeorm";
import { UsuarioRepositories } from "../repositories/UsuarioRepositories";
import { hash, compare } from "bcryptjs";

class UsuarioService{

    async cadastrar(id: number, nome: string, login: string, senha: string, firma_id: number){

        var usuarioExistente = await this.verificarUsuarioExistente(login);

        if(usuarioExistente){
            return {
                status: 409,
                msg: "Esse usuário já consta em nosso sistema!",
                usuario: null
            }
        }

        const usuarioRepository = getCustomRepository(UsuarioRepositories);

        const senhaHash = await hash(senha, 10);

        const salvarUsuario = usuarioRepository.create( {id: id, nome: nome, login: login, senha: senhaHash, firma_id: firma_id} );

        const usuarioSalvar = usuarioRepository.save(salvarUsuario);

        if(!usuarioSalvar){
            return { error: true, msg: "Erro ao salvar o usuário."};
        }

        return { error: false, msg: "Usuário cadastrado com sucesso", idCadastrado: (await usuarioSalvar).id };

    }

    async verificarUsuarioExistente(login: string){

        const usuarioRepository = getCustomRepository(UsuarioRepositories);

        const user = await usuarioRepository.findOne({login});

        return user ? true : false;

    }

    async logar(login: string, senha: string){

        const usuarioRepository = getCustomRepository(UsuarioRepositories);

        //const user = await usuarioRepository.findOne({login});

        var sql = `SELECT u.id, u.nome as nomeUser, u.login, u.senha, u.firma_id, f.nome as nomeFirma FROM usuario u INNER JOIN firma f ON u.firma_id = f.id where login = '${login}'`;
        const user = await usuarioRepository.query(sql);
        
        // Verificar se o email existe.
        if(!user[0].login){
            var error = { status: false, error: "Email e/ou Senha incorretos." };
            return error;
        }

        // Verificar se a senha está correta
        const senhHash = await compare(senha, user[0].senha);
        if(!senhHash){
            var error = { status: false, error: "Email e/ou Senha incorretos.." };
            return error;
        }

        var token = Math.random().toString() + "_" + user.id; //'Token-12345678911';

        var dados = { 
            status: true, 
            sucesso: "Usuário logado com sucesso.", 
            id: user[0].id, 
            nome: user[0].nomeuser, 
            login: user[0].login, 
            idfirma: user[0].firma_id, 
            nomefirma: user[0].nomefirma 
        };

        return dados;

    }

}

export { UsuarioService }