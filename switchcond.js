var numero=10;
switch(numero){
    case 10:
    console.log("hola soy un 10");
    break;
    case 20:
        console.log("hola soy un 20");
        break;
    default:
        console.log("no soy nada")
}


var op1=piedra;
var op2= papel;
var op3= tijera;
function resultadoganador(jugador,computador){
    switch(true){
        case jugador===computador:
            console.log("empate");
            break;
        case jugador===piedra && computador===papel;
        console.log("ganó el computador");
        break;
        default: console.log("nada")

}

}