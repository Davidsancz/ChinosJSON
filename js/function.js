class Rectangulo {

    constructor(alto, ancho){
        this.ancho=ancho;
        this.alto=alto;
        
    }

    calculararea(){

        return this.ancho*this.alto;

    }
}

function saludar() {
        alert("Buen Día ☻")
}

function area(){

    var ancho = document.getElementById("ancho").value;
    var alto = document.getElementById("alto").value;
    let rectangulo1 = new Rectangulo(alto, ancho);
    alert(rectangulo1.calculararea());
}