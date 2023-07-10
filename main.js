//Variáveis 
var num1 = parseFloat(document.getElementById('primeirovalor').value);
var num2 = parseFloat(document.getElementById('segundovalor').value);

const addBtn = document.querySelector('#addButton');
const subBTN = document.querySelector('#subtracaoButton');
const multBTN = document.querySelector('#multiploButton');
const divBTN = document.querySelector('#divisaoButton');
const resultado = document.querySelector('#resultado');

//Redirecionamento de Pagina
function pagCalc() {
    window.location.href = "calculadora.html"
}


//Funções 
function somar(eventoDeClick) {
    eventoDeClick.preventDefault();

    const num1 = parseFloat(document.querySelector('#primeirovalor').value);
    const num2 = parseFloat(document.querySelector('#segundovalor').value);
    resultado.innerHTML = num1 + num2;

}

function subtrair(eventoDeClick) {
    eventoDeClick.preventDefault();

    const num1 = parseFloat(document.querySelector('#primeirovalor').value);
    const num2 = parseFloat(document.querySelector('#segundovalor').value);
    resultado.innerHTML = num1 - num2;
}

function multiplicar(eventoDeClick) {
    eventoDeClick.preventDefault();

    const num1 = parseFloat(document.querySelector('#primeirovalor').value);
    const num2 = parseFloat(document.querySelector('#segundovalor').value);
    resultado.innerHTML = num1 * num2;

}

function dividir(eventoDeClick) {
    eventoDeClick.preventDefault();

    const num1 = parseFloat(document.querySelector('#primeirovalor').value);
    const num2 = parseFloat(document.querySelector('#segundovalor').value);
    resultado.innerHTML = num1 / num2;
}