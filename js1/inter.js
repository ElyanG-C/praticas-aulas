let numeroSecreto = gerarNumeroAleatorio();

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

alterarTexto('h1', 'Jogo do numero secreto');
alterarTexto('p', 'Escolha um numero entre 1 a 10')

function verificarChute() {
    console.log('o botao foi clicado')
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random () * 10 + 1)
}

