
function MostrarTexto(boton) {
   var texto = boton.previousElementSibling;
   if (texto.style.display === "none") {
       texto.style.display = "block";
       boton.textContent = "Ocultar";
   } else {
       texto.style.display = "none";
       boton.textContent = "Leer Más";
   }
}
