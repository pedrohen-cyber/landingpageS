const botao = document.getElementById('h-icon-button');
const tela_lateral = document.getElementById('tela-icon');

botao.addEventListener('click', function () {
  tela_lateral.classList.toggle('escondido');
});

const gancho_p1 = document.getElementById('texto-gancho1');
const destino1 = document.getElementById('textoDestino-sec1')
const gancho_p2 = document.getElementById('texto-gancho2');
const destino2 = document.getElementById('textoDestino-sec2')
const gancho_p3 = document.getElementById('texto-gancho3');
const destino3 = document.getElementById('textoDestino-sec3')
const gancho_p4 = document.getElementById('texto-gancho4');
const destino4 = document.getElementById('textoDestino-sec4')
const gancho_p5 = document.getElementById('texto-gancho5');
const destino5 = document.getElementById('textoDestino-sec5')

gancho_p1.addEventListener('click', function (){
    destino1.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

gancho_p2.addEventListener('click', function (){
    destino2.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

gancho_p3.addEventListener('click', function (){
    destino3.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

gancho_p4.addEventListener('click', function (){
    destino4.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

gancho_p5.addEventListener('click', function (){
    destino5.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});
