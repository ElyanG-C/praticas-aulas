 var numeroSecreto = 5;

function alterarTexto(tag, texto) {
   var campo = document.querySelector(tag);
   campo.innerHTML = texto;  
}

alterarTexto('h1', 'Jogo do numero secreto')
alterarTexto('p', 'Escolha um numero entre 1 a 10')

function numeroSecreto() {
    return parseInt(Math.random() * 10 + 1)
}

function verificarChute() {
    var pesquisa = document.querySelector('input')
    if (pesquisa > numeroSecreto) {
        alterarTexto('h1', 'o numero é maior')
    }
}