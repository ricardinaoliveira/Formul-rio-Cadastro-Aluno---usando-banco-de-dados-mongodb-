async function cadastrarAluno(){
    var Nome = document.getElementById("Nome");
    var Matricula = document.getElementById("Matricula");
    var Idade = document.getElementById("Idade");
    var aluno = {
      Nome: Nome.value,
      Matricula: Matricula.value,
      Idade: Idade.value

    }
   
    //console.log(nome.value);
    var dados = {
      method: "POST",
      headers:{"Content-type":"application/json"},
      body:JSON. stringify(aluno)
    }
    var resposta =  await fetch("http://localhost:3000/", dados);
    var dados = await resposta.json();
    limparInput();
}
function limparInput(){
  document.getElementById("Nome").value = "";
  document.getElementById("Matricula").value = "";
  document.getElementById("Idade").value = "";
}
async function listaralunos(){
  var resposta =  await fetch("http://localhost:3000/");
  var dados = await resposta.json();
  var todosAlunos = document.querySelector(".todos_alunos")
  
  for (i = 0; i < dados.length; i ++){
      console.log(dados[i].Nome);
      var alunos = document.createElement("div");
      alunos.classList.add("aluno");
      alunos.innerHTML = `

        <p>Nome:${dados[i].Nome}</p>
        <p>Matricula: ${dados[i].Matricula}</p>
        <p>Idade:${dados[i].Idade}</p>
    
      `;
      todosAlunos.appendChild(alunos)

    }
 }
  listaralunos();