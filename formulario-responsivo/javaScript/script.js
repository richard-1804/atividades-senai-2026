const alterarTitulo = document.getElementById('title-form');
const alterarFundo = document.getElementsByTagName('body');

// Dados Pessoais:
const userName = document.getElementById('username').value;
const userEmail = document.getElementById('email').value;
const userNascimento = document.getElementById('nascimento').value;
const userSenha = document.getElementById('senha').value;

// Outras Informações
const estado = document.getElementById('estados').value;
const genero = document.getElementsByClassName('genero').value;
const area = document.getElementsByClassName('area').value;
const bio = document.getElementById('biografia');

// Botão
const botao = document.getElementById('btn-submit');

// Função para quando o botão "Finalizar Cadastro" for clicado
botao.addEventListener('click', function() {

    alert("olha:" + userName)
   
})