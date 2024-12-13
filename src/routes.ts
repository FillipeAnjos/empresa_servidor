import { Router, Request, Response } from 'express';
import { ClienteController } from './controllers/ClienteController';
import { AssinaturaepagamentoController } from './controllers/AssinaturaepagamentoController';

const router = Router();

const clienteController = new ClienteController();
const assinaturaepagamentoController = new AssinaturaepagamentoController();

router.post('/cadastrarCliente', async function(req, res){

    try{
        const cliente = await clienteController.cadastrarCliente(req, res);
        return res.status(200).send({ cliente });
    }catch(err){
        return res.status(400).send({ error: "Error ao cadastrar o cliente: " + err });
    }

})

router.get('/listarClientes', async function(req, res){

    try{
        const clientes = await clienteController.listarClientes();
        return res.status(200).send({ clientes });
    }catch(err){
        return res.status(400).send({ error: "Error ao buscar os clientes: " + err });
    }

})

router.post('/listarClientes', async function(req, res){

    try{
        const clientes = await clienteController.listarClientesParam(req, res);
        return res.status(200).send({ clientes });
    }catch(err){
        return res.status(400).send({ error: "Error ao buscar os clientes: " + err });
    }

})

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

router.post('/cadastrarAssinaturaEPagamento', async function(req, res){

    try{
        const assinaturaepagamento = await assinaturaepagamentoController.cadastrarAssinaturaepagamento(req, res);
        return res.status(200).send({ assinaturaepagamento });
    }catch(err){
        return res.status(400).send({ error: "Error ao cadastrar da assinaturaepagamento: " + err });
    }

})

router.post('/verificarAtivacao', async function(req, res){

    try{
        const assinaturaepagamento = await assinaturaepagamentoController.verificarAtivacaoAssinaturaepagamento(req, res);
        return res.status(200).send({ assinaturaepagamento });
    }catch(err){
        return res.status(400).send({ error: "Error ao verificarAtivacao da assinaturaepagamento: " + err });
    }

})

router.post('/ativarOAtivoAssinaturaEPagamento', async function(req, res){

    try{
        const assinaturaepagamento = await assinaturaepagamentoController.ativarOAtivoAssinaturaepagamento(req, res);
        return res.status(200).send({ assinaturaepagamento });
    }catch(err){
        return res.status(400).send({ error: "Error ao ativarOAtivoAssinaturaEPagamento da assinaturaepagamento: " + err });
    }

})

router.post('/buscarQRCodeAssinaturaEPagamento', async function(req, res){

    try{
        const assinaturaepagamento = await assinaturaepagamentoController.buscarQRCodeAssinaturaepagamento(req, res);
        return res.status(200).send({ assinaturaepagamento });
    }catch(err){
        return res.status(400).send({ error: "Error ao buscarQRCodeAssinaturaEPagamento da assinaturaepagamento: " + err });
    }

})

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

router.get('/', function(req, res){
    console.log("Sem Front End");
});

router.get('/teste', function(req, res){
    console.log("esse aqui é um teste");
    res.json({ title: 'API em Node js' });
});

export { router }