import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

class UsuarioController{

    async loginUsuario(request: Request, response: Response) {

        const login = request.body.login;
        const senha = request.body.senha;

        if(!login || !senha){
            return {
                status: 400,
                msg: "todos os campos devem estar preenchidos!",
            }
        }

        const usuarioService = new UsuarioService();

        const user = await usuarioService.logar(login, senha);

        return user;

    }

    async cadastrarEditarUsuario(request: Request, response: Response) {

        const id = !request.body.id || request.body.id == undefined ? null : request.body.id;
        const nome = request.body.nome;
        const login = request.body.login;
        const senha = request.body.senha;
        const firma_id = request.body.firma_id;
        const confirma_senha = request.body.confirma_senha;
        
        const usuarioService = new UsuarioService();

        if(senha != confirma_senha){
            return {
                status: 400,
                msg: "A senha e confirma senha deverão necessariamente ser iguais!",
            }
        }
        
        if (!nome || !login || !senha || !firma_id || !confirma_senha) {
         return {
                status: 400,
                msg: "Todos dos campos deverão ser informados!",
            }
        }

        const usuario: any = await usuarioService.cadastrar(id, nome, login, senha, firma_id);

        if(!usuario){
            return { status: 404, msg: "Erro ao salvar o usuário."};
        }

        if(usuario.status == 409){
            return usuario;
        }

        //return { status: 200, msg: "Usuário cadastrado com sucesso", usuario: usuario};

        return usuario;
        
    }

}

export { UsuarioController }