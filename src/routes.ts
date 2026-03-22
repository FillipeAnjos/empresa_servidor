import { Router, Request, Response } from 'express';
import { FirmaController } from './controllers/FirmaController';
import { UsuarioController } from './controllers/UsuarioController';

import { ClienteController } from './controllers/ClienteController';
import { AssinaturaepagamentoController } from './controllers/AssinaturaepagamentoController';

const router = Router();

const firmaController = new FirmaController();
const usuarioController = new UsuarioController();

router.post('/cadastrarFirma', async function(req, res){
    
    try{
        const firma = await firmaController.cadastrarfirma(req, res);
        return res.status(200).send({ firma });
    }catch(err){
        return res.status(400).send({ error: "Error ao cadastrar a firma: " + err });
    }
    
})

router.get('/listarFirma', async function(req, res){
    
    try{
        const firma = await firmaController.listarFirma();
        return res.status(200).send({ firma });
    }catch(err){
        return res.status(400).send({ error: "Error ao listar as firmas: " + err });
    }
    
})

router.post('/cadastrarUsuario', async function(req, res){
    
    try{
        const usuario = await usuarioController.cadastrarUsuario(req, res);
        return res.status(200).send({ usuario });
    }catch(err){
        return res.status(400).send({ msg: "Error ao cadastrar o usuario: " + err });
    }
    
})

router.post('/loginUsuario', async function(req, res){
    
    try{
        const usuario = await usuarioController.loginUsuario(req, res);
        return res.status(200).send({ usuario });
    }catch(err){
        return res.status(400).send({ msg: "Error ao logar o usuario: " + err });
    }
    
})















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



















// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

// http://localhost:3001/
router.get('/', function(req, res){
    console.log("Sem Front End");
});

// http://localhost:3001/teste
router.get('/teste', function(req, res){
    console.log("esse aqui é um teste");
    res.json({ title: 'API em Node js' });
});

export { router }