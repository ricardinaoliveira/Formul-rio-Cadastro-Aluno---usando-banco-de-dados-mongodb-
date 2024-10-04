
import express from "express";
import { encontrarTodos, insertOne} from "./mongodb.js";
import cors from "cors";
//const app = express();

//app.use(express.json()); // Para analisar JSON
//app.use(express.urlencoded({ extended: true }))
var servidorWeb = express();
servidorWeb.use(express.json()); 
servidorWeb.use(express.json()); 
var Porta = 3000;
servidorWeb.use(cors());
async function paginaPrincipal(requisao, resposta){
    var dadosmongodb = await encontrarTodos();
    resposta.json(dadosmongodb);

    //resposta.send("Servidor ativo e escutando");

}

async function rotacadastrar(requisao, resposta){
  console.log(requisao.body.Nome);
  console.log(requisao.body.Matricula);
  console.log(requisao.body.Idade);
  const dados = {
    Nome:requisao.body.Nome,
    Matricula:requisao.body.Matricula,
    Idade:requisao.body.Idade,
    };
    const resultado = await insertOne(dados);
    resposta.json(resultado);
    console.log(resultado);
           
}
//export {paginaPrincipal, rotacadastrar};
servidorWeb.get("/",paginaPrincipal);
servidorWeb.post("/",rotacadastrar);
//app.post("/", rotacadastrar);
servidorWeb.listen(Porta);

