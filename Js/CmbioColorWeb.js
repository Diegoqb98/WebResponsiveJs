function cambiocolor(){
    let boton = document.getElementsByTagName("button")[0];
    boton.innerText = "Volver atras";
    if(document.body.style.color == "white" && document.body.style.backgroundColor == "black"){
         document.body.style.backgroundColor = "white"
         document.body.style.color = "black"
    } else{
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }

}