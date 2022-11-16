/*criar função em segundos para contagem*/
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);//para converter os milessimos em segundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:'GMT' //para como locar no time zone local(brasil)
    });
}//agora temos que colocar so segunsdos como zero vamos criar uma variaval let segundos

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0; 
let timer;//posso criar uma função de fora pa dentro da função não de dentro pra fora

function iniciaRelogio() { //roda a função
    timer = setInterval(function(){
        segundos++;//incrementa os segundos
        relogio.innerHTML = criaHoraDosSegundos(segundos);//incere a função dentro do html
    }, 1000);
};

//segunda forma de fazer tulizando o 'e.target';
document.addEventListener('click', function(e){
const el = e.target; //mostrar os click que estam sendo realizados 
if(el.classList.contains('zerar')){
    clearTimeout(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00';
    segundos = 0;
}
if(el.classList.contains('pausar')){
    relogio.classList.add('pausado');
    clearTimeout(timer);
}
if(el.classList.contains('iniciar')){
    relogio.classList.remove('pausado');
    clearTimeout(timer);
    iniciaRelogio();
}
});



/* forma 1 de fazer
iniciar.addEventListener('click', function(event){ //captura o evendo click
    relogio.classList.remove('pausado');
    clearTimeout(timer);
    iniciaRelogio();
});
pausar.addEventListener('click', function(event){ //captura o evendo click
    relogio.classList.add('pausado');
    clearTimeout(timer);
});
zerar.addEventListener('click', function(event){ //captura o evendo click
    clearTimeout(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});*/
