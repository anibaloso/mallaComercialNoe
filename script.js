document.getElementById("malla").addEventListener('click', e => {
    const imagen = document.createElement("img");

    //colocamos la imagen en la posicion del click
    imagen.src = "assets/img/x.png";
    imagen.classList.add("imagen")


    imagen.onload = () => {

        //obtener tamaño de la imagen
        const imagenWidth = imagen.offsetWidth;
        const imagenHeight = imagen.offsetHeight;

        //calcular la posicion para centrar 
        const positionX = e.pageX - (imagenWidth / 2)
        const positionY = e.pageY - (imagenHeight / 2)

        imagen.style.left = `${positionX}px`
        imagen.style.top = `${positionY}px`

        guardarImagenEnLS(positionX, positionY, imagen.src)
    }


    //se muestra la imaagen
    document.body.appendChild(imagen)

});

function guardarImagenEnLS(x, y, src) {
    //obtener el array de imagenes de localstorage
    const imagenes = JSON.parse(localStorage.getItem('imagenes')) || []


    //añadir la nueva imagen al array
    imagenes.push({ x, y, src });

    // const imagenInfo = { x, y, src };

    // guardar el arrai actualizado
    localStorage.setItem("imagenes", JSON.stringify(imagenes));
}

//funcion para cargar la informacion de la imagen desde el localstorage
function cargarImagenDeLS() {
    const imagenes = JSON.parse(localStorage.getItem('imagenes')) || []
    
    imagenes.forEach(imageninfo => {
        
        const imagen = document.createElement("img");

        //configurar la imagen con la informacion recuperada
        imagen.src = imageninfo.src;
        imagen.classList.add("imagen");
        imagen.style.left = `${imageninfo.x}px`
        imagen.style.top = `${imageninfo.y}px`

        //mostrar la imagen
        document.body.appendChild(imagen);
    });

    

}
//cargar imagenes al iniciar
document.addEventListener('DOMContentLoaded', cargarImagenDeLS)