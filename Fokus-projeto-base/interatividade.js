var html = document.querySelector('html')
var focobt = document.querySelector('.app__card-button--foco')
var curtobt = document.querySelector('.app__card-button--curto')
var longobt = document.querySelector('.app__card-button--longo')

focobt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtobt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longobt.addEventListener('click', () => {
    html.setAttribute('data-contexto','descanso-longo')
} )

