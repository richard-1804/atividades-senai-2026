
async function buscarTarefa(){
    
   const tarefa = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
         
             if (tarefa.ok) {

                const dados = await tarefa.json();

                 document.getElementById('log').textContent = dados.title;

                } else {
                    document.getElementById('log').textContent = 'nao foi'
                }
            
            
        }