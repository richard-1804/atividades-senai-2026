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
const genero1 = document.getElementById('masculino');
const genero2 = document.getElementById('feminino');
const genero3 = document.getElementById('outro');

const area1 = document.getElementById('html');
const area2 = document.getElementById('css');
const area3 = document.getElementById('js');
const area4 = document.getElementById('design');
const bio = document.getElementById('biografia');

// Botão
const botao = document.getElementById('btn-submit');

// Função para quando o botão "Finalizar Cadastro" for clicado
botao.addEventListener('click', function() {

   const generoMarcado = genero1.checked || genero2.checked || genero3.checked;
   const areaMarcada = area1.checked || area2.checked || area3.checked || area4.checked;

   if (userName.value === "" || userEmail.value === "" || userNascimento.value === "" || userSenha.value === "" || estado.value === "" || !generoMarcado || !areaMarcada || bio.value === "") {

    formError.textContent = "Preencha TODOS os CAMPOS corretamente";

   } else {

    alterarTitulo.style.display = "none";
    formError.style.display = "none";

    alterarFundo.style.backgroundColor = "#9b70dc";

    feedBack.innerHTML = "Seja Bem-Vindo(a), " + userName.value + "!";
   }

});