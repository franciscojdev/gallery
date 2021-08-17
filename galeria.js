//vars
let h1 = document.querySelector('h1');
let palco = document.getElementById('palco');
let galeria = document.getElementById('galeria');
let div = document.getElementById('div');
let mainImg = document.getElementById('mainImg');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let cross = document.querySelector('aside');

//miniaturas e botoes
mainFunction(listaImagens);
function mainFunction() {
    //miniaturas
    listaImagens.map( ({id, imageUrl}) => {
        galeria.innerHTML += `
        <img src='${imageUrl}' id='${id}' class='images'>
        `;
    });

    let img = document.querySelectorAll('.images');
    img[0].classList.add('selected');//efeito seleccionado 1a img

    //botao direito
    btnRight.addEventListener('click', goRight, false);
    function goRight() {
        let target = document.querySelectorAll('.selected');
        let numTarget = Number(target[0].id);
        let numUp = numTarget + 1;
        console.log(numUp);
        
        if(numUp >= 0 && numUp < img.length) {
            mainImg.src = `${listaImagens[numUp].imageUrl}`;
            target[0].classList.remove('selected');
            img[numUp].classList.add('selected');
        }
        if(numUp >= img.length) {
            numUp = 0;
            mainImg.src = `${listaImagens[numUp].imageUrl}`;
            target[0].classList.remove('selected');
            img[numUp].classList.add('selected');
        }
    }

    //botao esquerdo
    btnLeft.addEventListener('click', goLeft, false);
    function goLeft() {
        let target = document.querySelectorAll('.selected');
        let numTarget = Number(target[0].id);
        let numDown = numTarget - 1;
        console.log(numDown);
        
        if(numDown >= 0 && numDown < img.length) {
            mainImg.src = `${listaImagens[numDown].imageUrl}`;
            target[0].classList.remove('selected');
            img[numDown].classList.add('selected');
        }
        if(numDown < 0) {
            numDown = 8;
            mainImg.src = `${listaImagens[numDown].imageUrl}`;
            target[0].classList.remove('selected');
            img[numDown].classList.add('selected');
        }
    }
}

//mudar imagem ande
galeria.addEventListener('click', seleccionar, false);
function seleccionar(event) {
    let target = document.querySelectorAll('.selected');
    console.log(target)

    if(event.target.className == 'images') {
        mainImg.src = `${listaImagens[event.target.id].imageUrl}`;

        target[0].classList.remove('selected');
        event.target.classList.add('selected');
    }
}

//ampliar imagem
mainImg.addEventListener('click', expand, false);
function expand() {
    if(mainImg.classList.contains('expanded')) {
        div.classList.remove('newdiv');
        mainImg.classList.remove('expanded');
        h1.classList.remove('hide');
        galeria.classList.remove('hide');
        cross.classList.remove('show');
    }
    else {
        div.classList.add('newdiv');
        mainImg.classList.add('expanded');
        h1.classList.add('hide');
        galeria.classList.add('hide');
        cross.classList.add('show');
    }
}
//cross
cross.firstElementChild.addEventListener('click', close, false);
function close(){
    console.log('hi')
    if(mainImg.classList.contains('expanded')) {
        div.classList.remove('newdiv');
        mainImg.classList.remove('expanded');
        h1.classList.remove('hide');
        galeria.classList.remove('hide');
        cross.classList.remove('show');
    }
}