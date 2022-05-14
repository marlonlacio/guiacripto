addEventListener('resize', ()=>{
    if(innerWidth < 810){
        menu.style.display = "none"
        
    }
    else{
        menu.style.display = "flex";
        
    }
})

function botao(){
    let menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        return(
            menu.style.display = 'none'
        )
     }else {
        return(
            menu.style.display = 'block'
        )
}}

const games = document.getElementById('jogos')
const faucet = document.getElementById('faucet')
const bot = document.getElementById('bots')
const exchange = document.getElementById('exchange')
const containers = document.querySelectorAll('.card')
const title = document.getElementById('title')

const jogos = document.querySelectorAll('.game')
const faucets = document.querySelectorAll('.faucets')
const bots = document.querySelectorAll('.bot')
const exchanges = document.querySelectorAll('.exchanges')



games.addEventListener('click', ()=>{
    containers.forEach((elemento) =>{
        elemento.style.display = "none"
    })
    jogos.forEach((elemento) =>{
        elemento.style.display = "block"
    })
    title.innerHTML = 'Top games NFT'
})

faucet.addEventListener('click', ()=>{
    containers.forEach((elemento) =>{
        elemento.style.display = "none"
    })
    faucets.forEach((elemento) =>{
        elemento.style.display = "block"
    })
    title.innerHTML = 'Top faucets'
})

bot.addEventListener('click', ()=>{
    containers.forEach((elemento) =>{
        elemento.style.display = "none"
    })
    bots.forEach((elemento) =>{
        elemento.style.display = "block"
    })
    title.innerHTML = 'Top bots telegram'
})

exchange.addEventListener('click', ()=>{
    containers.forEach((elemento) =>{
        elemento.style.display = "none"
    })
    exchanges.forEach((elemento) =>{
        elemento.style.display = "block"
    })
    title.innerHTML = 'Top exchanges'
})
