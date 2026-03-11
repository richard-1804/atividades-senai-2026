const setaE = document.getElementById('seta-e');
const setaD = document.getElementById('seta-d');
const setaEB = document.getElementById('seta-e-b');
const setaDB = document.getElementById('seta-d-b');

const listaDeMusica = document.querySelector('.musica-alta');
const listaDeArtistas = document.querySelector('.artistas-populares');

const entradaSaida = document.querySelector('.carrosel-container');
const entradaSaida2 = document.querySelector('.carrosel-container-2');

// Entradas e Saídas do mouse

entradaSaida.addEventListener('mouseenter', () => {

    setaE.style.display = 'block';
    setaD.style.display = 'block';
    
});

entradaSaida.addEventListener('mouseleave', () => {

    setaE.style.display = 'none';
    setaD.style.display = 'none';
});


entradaSaida2.addEventListener('mouseenter', () => {

    setaEB.style.display = 'block';
    setaDB.style.display = 'block';
    
});

entradaSaida2.addEventListener('mouseleave', () => {

     setaEB.style.display = 'none';
    setaDB.style.display = 'none';
});


// Eventos de Click


setaD.addEventListener('click', () => {

    listaDeMusica.scrollBy({ left: 300, behavior: 'smooth'})

});

setaE.addEventListener('click', () => {

    listaDeMusica.scrollBy({ left: -300, behavior: 'smooth'})

});

setaDB.addEventListener('click', () => {

    listaDeArtistas.scrollBy({ left: 300, behavior: 'smooth'})

});

setaEB.addEventListener('click', () => {

    listaDeArtistas.scrollBy({ left: -300, behavior: 'smooth'})

});