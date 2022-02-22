const hambur = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

console.log(hambur)
console.log(menu)

hambur.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hambur) {
        menu.classList.toggle('spread')
    }
})

