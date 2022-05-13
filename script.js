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
