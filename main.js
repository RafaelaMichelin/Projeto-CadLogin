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
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-warning'onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>"; //sinal de + para concatenar
        document.getElementById('tabela').innerHTML = tabela;          
    }
}
//Função para excluir nome da lista
function excluir(i){  //parâmetro i
dadosLista.splice((i-1), 1);   //método da array para excluir ou editar
document.getElementById('tabela').deleteRow(i);

}
//Função para edição de nome da lista 
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice((i - 1), 1);
}