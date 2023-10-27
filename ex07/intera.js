let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
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
let palavraTentativa = 'tentativas';
var mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}; `;


if (pesquisa == numeroSecreto )
 {
    alterarTexto('h1', 'Acertou');
    alterarTexto('p', mensagemTentativas)

} else 
  if (pesquisa > numeroSecreto) 
  {
    alterarTexto('p', 'O numero secreto é menor ')
  } else 
  {
    alterarTexto('p', 'O numero secreto é maior')
  } 
  
  {
     tentativas++;
} 

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