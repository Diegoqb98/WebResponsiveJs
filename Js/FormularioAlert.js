
function Valoracion(e){
        e.preventDefault()
        let formulario = document.getElementById('Opinion');
        let valoración = document.createElement('p');
        valoración.textContent = formulario.value;
        document.getElementById("formulario").appendChild(valoración);
        alert("¡Gracias por tu valoración!");
}
    