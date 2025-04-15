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
function salvarUser(){
 let nomeUser = document.getElementById('nomeUser').value;
 if(nomeUser){
    //metodo para colocar o valor dentro do array 
    dadosLista.push(nomeUser); 
    console.log(dadosLista);
    //apagar o nome do campo input
    document.getElementById("nomeUser").value = "";
 }
}