'use strict'

async function fotos() {
    const url = 'http://localhost:3000/fotos'
    const response = await fetch(url);
    const data = await response.json();
    return data
}

async function imagensSlide(imagens, tempo = 0){

    let contador = 0;

    const imgBACK = document.getElementById("imagnes")
    const legendaBACK = document.getElementById("legenda")
    const dataBACK = document.getElementById("data")


    function Slides() {
        const foto = imagens[contador];
        imgBACK.src = foto.imagem;
        legendaBACK.textContent = foto.legenda;
        dataBACK.textContent = foto.data

        contador = (contador +1 ) % imagens.length;
    }

    fotos();
    setInterval(Slides, tempo);
}

fotos().then(fotos => {
    imagensSlide(fotos, 4000); 
});