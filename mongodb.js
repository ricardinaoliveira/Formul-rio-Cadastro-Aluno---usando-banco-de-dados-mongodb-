import { MongoClient } from "mongodb";

var url = "mongodb+srv://ricardianaoliveira5:ricardiana@cluster0.kdw9d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


async function encontrarTodos(){
  const banco = new MongoClient(url);
  var database = await banco.db("ifce");
  var alunos = await database.collection("aluno");

  var resultado = await alunos.find();
  var dados = await resultado.toArray();
  console.log(dados);
  return dados;
}
  
async function insertOne(dados){
    const client = new MongoClient(url);
    try{
        const database = client.db("ifce");
        const alunos = database.collection("aluno");
  
        const aluno = await alunos.insertOne(dados);
        return aluno;
  
    }catch(e){
        throw e;
    }finally{
        await client.close();
    }
    
}

export {encontrarTodos, insertOne};