
var edad=18;

if (edad===18){
    console.log("Hola, puedes votar por primera vez")
} else if ( edad>18){
    console.log( "Hola puedes votar nuevamente")
} else{
    console.log("Hola aun no tienes 18 por lo que no puedes votar")
}



var resultado= numero===1 ? "hola soy un uno" : "no soy un uno";
console.log(resultado)

user===op1;

var op1  = "piedra";
var op2 = "papel";
var op3= "tijera";

var resultado = function(user,computador){
    if(user===op1 && computador===op3){
        console.log("ganaste usuario");
    }
    else if (user===op2 && computador==op1){
        console.log("ganaste usuario");
    }
    else if (user===op3 && computador===op3){
        console.log("ganaste usuario");
    }
    else{
        console.log(perdiste usuario);
    }
    else if (user===computador){
        console.log("empate");
    }
}


