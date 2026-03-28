import { Router, Request, Response } from 'express';
import { FirmaController } from './controllers/FirmaController';
import { UsuarioController } from './controllers/UsuarioController';
import { LancamentoController } from './controllers/LancamentoController';

const router = Router();

const firmaController = new FirmaController();
const usuarioController = new UsuarioController();
const lancamentoController = new LancamentoController();

router.post('/cadastrarEditarFirma', async function(req, res){
    
    try{
        const firma = await firmaController.cadastrarEditarFirma(req, res);
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

router.post('/cadastrarEditarUsuario', async function(req, res){
    
    try{
        const usuario = await usuarioController.cadastrarEditarUsuario(req, res);
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

router.post('/cadastrarLancamento', async function(req, res){
    
    try{
        const lancamento = await lancamentoController.cadastrarLancamento(req, res);
        return res.status(200).send({ lancamento });
    }catch(err){
        return res.status(400).send({ msg: "Error ao cadastrar o lançamento: " + err });
    }
    
})


router.get('/buscarLancamento', async function(req, res){
    
    try{
        const lancamento = await lancamentoController.listarLancamento();
        return res.status(200).send({ lancamento });
    }catch(err){
        return res.status(400).send({ error: "Error ao listar os lançamentos: " + err });
    }
    
})

router.get('/listarUsuarios', async function(req, res){
    
    try{
        const usuario = await usuarioController.listarUsuario();
        return res.status(200).send({ usuario });
    }catch(err){
        return res.status(400).send({ error: "Error ao listar os usuários: " + err });
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