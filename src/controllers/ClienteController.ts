import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";

class ClienteController{

    async cadastrarCliente(request: Request, response: Response) {

        const seu_nome = request.body.seu_nome;
        const seu_email = request.body.seu_email;

        const clienteService = new ClienteService();

        const cliente = clienteService.cadastrar(seu_nome, seu_email);

        return cliente;
        
    }

    async listarClientes() {

        const clienteService = new ClienteService();

        const clientes = clienteService.listarClientes();

        return clientes;
        
    }

    async listarClientesParam(request: Request, response: Response) {

        const seu_email = request.body.seu_email;

        const clienteService = new ClienteService();

        const clientes = clienteService.listarClientesParam(seu_email);

        return clientes;
        
    }

}

export { ClienteController }