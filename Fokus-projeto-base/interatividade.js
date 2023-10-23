var html = document.querySelector('html')
var focobt = document.querySelector('.app__card-button--foco')
var curtobt = document.querySelector('.app__card-button--curto')
var longobt = document.querySelector('.app__card-button--longo')
var banner = document.querySelector('.app__image')

focobt.addEventListener('click', () => {
   alterarContexto('foco')
})

curtobt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longobt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
} )

function alterarContexto(contexto) {
  html.setAttribute('data-contexto', contexto)
  banner.setAttribute('src', `/imagens/${contexto}.png`)
}
