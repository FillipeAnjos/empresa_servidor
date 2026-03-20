import { Request, Response } from "express";
import { FirmaService } from "../services/FirmaService";

class FirmaController{

    async cadastrarfirma(request: Request, response: Response) {

        const nome = request.body.nome;

        const firmaService = new FirmaService();

        const firma = firmaService.cadastrar(nome);

        return firma;
        
    }

}

export { FirmaController }