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