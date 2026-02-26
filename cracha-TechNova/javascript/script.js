// Inputs Principais
const username = document.getElementById('username');
const cargoFuncionario = document.getElementById('cargo');
const opcoes = document.getElementById('opcoes');

// Inputs a Serem Mudados
const nomeCracha = document.getElementById('nome-cracha');
const cargoCracha = document.getElementById('cargo-cracha');
const dep = document.getElementById('dep');

// Mudança do fundo e da borda do crachá + Botão
const fundoCracha = document.querySelector('.foto-cracha');
const borda = document.querySelector('.foto-cracha');
const botao = document.getElementById('btn-gerar');

// Evento de Click no botão
botao.addEventListener('click', function() {

    // Variáveis que pegam o valor depois que o form já foi preenchido
    const nomeCompleto = username.value;
    const cargo = cargoFuncionario.value;

    /* 
    opcoes: chamo minha constante.
    .opitions: entro dentro das opções do meu select
    opcoes: é o meu select
    .selectedIndex: delvolve o número da posição que o usuário clicou
    [opcoes.selectedIndex]: é desta forma que acessamso a "gaveta" do select
    .text: pega o texto escrito entre as tags
    */
    const opcoesSelect = opcoes.options[opcoes.selectedIndex].text;

    // Verificação se o nome + cargo estam preenchidos ou não
    if (nomeCompleto === "" && cargo === "") {
        alert('Por favor, preencha TODOS os campos!!');

    } else if (nomeCompleto !== "" && cargo === "") {

        alert("Por favor, insira seu cargo!!");

    } else if (nomeCompleto === "" && cargo !== "") {
        
        alert("Por favor, insira seu nome!!");

    } else { // Se todos esiverem preenchidos:

        alert('Crachá criado com Sucesso!');

        // Mudamos a cor da borda
        borda.style.borderColor = '#25e9ae'

        // Mudamos no crachá o nome, cargo e departamento
        nomeCracha.textContent = nomeCompleto;
        cargoCracha.textContent = cargo;
        dep.textContent = opcoesSelect;

        // Desafio extra:
            if (opcoesSelect === "Desenvolvimento") {

                fundoCracha.style.backgroundColor = '#0000FF';

            } else if (opcoesSelect === "Design") {

                fundoCracha.style.backgroundColor = '#800080';

            }
    }
    
})