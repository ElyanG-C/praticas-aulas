let numeroSecreto = gerarNumeroAleatorio();

function alterarTexto(tag, texto) 
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

alterarTexto('h1', 'Jogo do numero secreto');
alterarTexto('p', 'Escolha um numero entre 1 a 10')
 
 function apertarBotao() 
 {
var pesquisa = document.querySelector('input').value;
var tentativa = 1;

if (pesquisa > numeroSecreto )
 {
   alterarTexto('h1', 'Errou!')
   alterarTexto('p', `O numero secreto é maior que ${pesquisa} `)
} else 
if(pesquisa < numeroSecreto)
{
    alterarTexto('p', `O numero secreto é menor que ${pesquisa}`)
}
{

} else 
{
    alterarTexto('h1', 'acertou!')
}

tentativa++;
}

function gerarNumeroAleatorio()
{
   return parseInt(Math.random() * 10 + 1)
}

function reiniciarJogo() 
{
    pesquisa = document.querySelector('input');
    pesquisa.value = '';
    alterarTexto('h1', 'Jogo do numero secreto');
   
}