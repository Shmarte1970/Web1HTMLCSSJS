const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hambur1 = document.querySelector('.hamburguer');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{

       /* console.log(imagen.getAttribute('src'))  // Puedo ver la ruta y el nombre donde se encuentra la imagen por consola*/
       aparecerImagen(imagen.getAttribute('src')) 
       
    })
})



contenedorLight.addEventListener('click', (e)=>{
    /*console.log(e.target)*/ // al pulsar me dira en consola donde he pulsado
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hambur1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hambur1.style.opacity = '0'
}