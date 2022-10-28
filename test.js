var usuario1={
nombre:"Pierina",
apellido:"Prado",
nombreDeUsuarioEnPlatzi:"pieri",
edad:27,
correoElectronico:"pierina.prado@ucsp.edu.pe",
mayorDeEdad:"si",
dineroAhorrado:5000,
deudas:250,

dinerototal: function(){
    console.log(this.dineroAhorrado - this.deudas)
},


nombrecompleto: function(){
    console.log(`${this.nombre} ${this.apellido}`);
}

}

var respuesta= prompt("cuanto es 2+2");

if (respuesta===4){
    console.log("felicidades");

}
else{
    console.log(empieza de nuevo)
}


function myarray(array){
    console.log(array[0])
}

myarray= {
    fruta1: "fresa",
    fruta2: "pera",
    fruta3: "cor",
}


function IMPRIMIR(OBJETO){
    for (var i in OBJETO){
        console.log(myarray[i]);
    }
    
}

myarray(["fresa", "leche","lechecita"]);


