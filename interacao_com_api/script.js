async function buscarTarefa(){ // Iniciamos a função assíncrona (async). Método: GET
    
   const tarefa = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // aguarda a API responder a requisição e a transforma em uma variável

        if (tarefa.ok) { // Se a resposta da API for 200 OK 

        const dados = await tarefa.json(); // Transforma os dados da API (tarefa) em objetos JS

            document.getElementById('log').textContent = 'Tarefa encontrada: ' + dados.title; // E exibe a resposta na tela

        } else {
            document.getElementById('log').textContent = 'Não foi possível acessar o título da tarefa'; // Se não, exibe está menssagem.
        };

};

async function cadastrarTarefa() { // Outra função assíncrona. Método: POST

    const dadosJSON = { title: 'Cadastrando nova tarefa', completed: false, userId: 1 }; // Objeto js para ser transformado em json
    
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', { // Guardamos a API em uma variável, indicamos o método e os dados
        method: 'POST', // Método usado
        body: JSON.stringify(dadosJSON), // Transforma o objeto (dadosJSON) em json
        headers: {
            'Content-Type': 'application/json' // Indicamos que o conteúdo é json
        }
    });


    if(resposta.status === 201) { // Se o status da resposta da form 201:
        document.getElementById('log').textContent = 'Cadastro de tarefas: Novo tarefa cadastrada'; // Exibe a menssagem na tela
    } else {
        document.getElementById('log').textContent = 'Não foi possível cadastrar a tarefa'; // Se não, exibe esta menssagem na tela
    };
   
};

async function atualizarTarefa() { // Outra função assíncrona. Método: PUT

    const dadosJSON2 = { title: 'Tarefa Atualizada', completed: true, userId: 1 } // Atualização dos dados

    const atualizar = await fetch('https://jsonplaceholder.typicode.com/posts/1', { // Guardamos a API novamente, e atualizamos o método e os dados
        method: 'PUT',
        body: JSON.stringify(dadosJSON2), // Transforma o objeto (dadosJSON) em json
        headers: {
            'Content-Type': 'application/json' // Indicamos que o conteúdo é json
        },
    });

    if(atualizar.ok) { // Se a requisição der certo: 
        document.getElementById('log').textContent = 'Atualização: Tarefa atualizada com sucesso'; // Exibe a menssagem na tela
    } else {
        document.getElementById('log').textContent = 'Atualização: Não foi possível atualizar a tarefa'; // Se não, exibe esta menssagem na tela
    };
};

async function limparTarefa() { // função para limpar a caixa de exibição
    document.getElementById('log').textContent = 'Aguardando ação...';
}

/* 

Questões Teóricas:

1. Por que o fetch precisa da palavra-chave await (ou .then) para funcionar corretamente?

R: Para que o código finalize o carregamento antes de executar a próxima linha. Porque se ele continuar pode não receber o valor requisitado e dar erro no código.
-------------------------

2. Qual a diferença entre os Status Codes 201 e 204?

R: 201: esse código indica que um recurso foi criado e tem dados a serem retornados, geralmente é usado em operações POST e PUT.
204: esse código indica que um recurso foi criado mas não tem dados para retornar, geralmente é usado em operações como PUT e DELETE.
-------------------------

3. Se você esquecer de usar o JSON.stringify() ao enviar dados no POST, o que provavelmente acontecerá com a requisição?

R: Ele dá o erro 500, pois os dados não são convertidos de js para JSON. Por isso é importante converter os dados antes de fazer operações como esta
-------------------------

4. O fetch dispara o bloco catch se o servidor responder com um erro 404? Por que? 

R: O fetch não dispara o bloco catch, porque qualquer resposta do servidor, seja um erro 404 ou 500, ele considera como uma promessa resolvida, mesmo que o valor dela seja falso.

*/