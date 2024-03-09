
let fotos = ["foto-nintendo-1", "foto-nintendo-2", "foto-nintendo-3"];
let fotoActual = -1;
function imagenesDelanteNintendo(){

    document.getElementById("nintendo-section").classList.remove(fotos[fotoActual]);
    fotoActual = (fotoActual + 1) % fotos.length;
    document.getElementById("nintendo-section").classList.add(fotos[fotoActual]);
}

function imagenesAtrasNintendo(){
    
    document.getElementById("nintendo-section").classList.remove(fotos[fotoActual]);
    fotoActual = (fotoActual - 1) % fotos.length;
    document.getElementById("nintendo-section").classList.add(fotos[fotoActual]);
}

