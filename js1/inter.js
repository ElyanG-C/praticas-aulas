function mostrarTextoNaTela(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mostrarTextoNaTela('h1', 'Tabuada ');
mostrarTextoNaTela('p', 'Escolha um numero da tabuada');

var numero = [1, 2, 3, 4, 5, 6, 7];


