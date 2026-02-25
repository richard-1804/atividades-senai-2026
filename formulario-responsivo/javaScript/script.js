const alterarTitulo = document.getElementById('title-form');
const alterarFundo = document.querySelector('article');
const formError = document.getElementById('mensagem-erro');
const feedBack = document.getElementById('feedback');

// Dados Pessoais:
const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userNascimento = document.getElementById('nascimento');
const userSenha = document.getElementById('senha');

// Outras Informações
const estado = document.getElementById('estados');
const genero = document.getElementsByClassName('genero');
const area = document.getElementsByClassName('area');
const bio = document.getElementById('biografia');

// Botão
const botao = document.getElementById('btn-submit');

// Função para quando o botão "Finalizar Cadastro" for clicado
botao.addEventListener('click', function() {

   if (userName.value === "" || userEmail.value === "" || userNascimento.value === "" || userSenha.value === "" || estado.value === "" || genero.checked === "" || area.checked === "" || bio.value === "") {

    formError.textContent = "Preencha TODOS os CAMPOS corretamente";

   } else {

    alterarTitulo.style.display = "none";
    formError.style.display = "none";

    alterarFundo.style.backgroundColor = "#9b70dc";

    feedBack.innerHTML = "Seja Bem-Vindo(a), " + userName.value + "!";
   }

});