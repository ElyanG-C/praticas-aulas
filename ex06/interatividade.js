var res = document.querySelector('.resposta')
var per = document.querySelector('.pergunta')
var boto = document.querySelector('.botao')
var contagem = document.querySelector('#numero')

function clickMenu() {
    if (contagem > 6) {
        res.style.color = 'black'
    }

}