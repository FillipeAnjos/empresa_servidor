import { Request, Response } from "express";
import { FirmaService } from "../services/FirmaService";

class FirmaController{

    async cadastrarEditarFirma(request: Request, response: Response) {

        const id = !request.body.id || request.body.id == undefined ? null : request.body.id;
        const nome = request.body.nome;

        const firmaService = new FirmaService();

        const firma = firmaService.cadastrarEditar(id, nome);

        return firma;
        
    }

    async listarFirma() {

        const firmaService = new FirmaService();

        const firma = firmaService.listar();

        if(!firma){
            return false;
        }

        return firma;
        
    }

}

export { FirmaController }