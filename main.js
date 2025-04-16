// Implementa acesso para a tela de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    //Implemente estrutura que testa se toddos os campos foram preeenchidos
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }
    else{
        window.location.href = "cadastro.html";
    }
}
//criando variável do tipo array
var dadosLista = [];
//função para salvar usuario
function salvarUser(){
 let nomeUser = document.getElementById('nomeUser').value;
 if(nomeUser){
    //metodo para colocar o valor dentro do array 
    dadosLista.push(nomeUser); 
    
    console.log(dadosLista);
    criaLista();
    //apagar o nome do campo input
    document.getElementById("nomeUser").value = "";
 } else{
    alert("Favor informar um nome para cadastro");
 }
}
//Função para preencher a lista de cadastro
function criaLista(){
    let tabela = "<tr><td>Nome</td><th>Ações</td></tr>";
    for(let i = 0; i<= (dadosLista.length-1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-warning'>Editar</button><button class='btn btn-danger'>Excluir</button></td></tr>"; //sinal de + para concatenar
        document.getElementById('tabela').innerHTML = tabela;          
    }
}
