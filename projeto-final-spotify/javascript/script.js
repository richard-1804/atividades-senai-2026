const setaE = document.getElementById('seta-e');
const setaD = document.getElementById('seta-d');
const listaDeMusica = document.querySelector('.musica-alta');

setaD.addEventListener('click', () => {

    listaDeMusica.scrollBy({ left: 300, behavior: 'smooth'})

});

setaE.addEventListener('click', () => {

    listaDeMusica.scrollBy({ left: -300, behavior: 'smooth'})

});