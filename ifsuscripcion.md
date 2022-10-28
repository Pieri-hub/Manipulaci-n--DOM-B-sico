
function tipodeSuscripcion(suscripcion){
    if ( suscripcion=="free"){
        console.log("es gratis todos los cursos");
        return;}
    if (suscripcion== "basic"){
        console.log("puedes llevar algunos cursos");
        return;}
    if (suscripcion=="intermedio"){
        console.log("puedes llevar todos los cursos");
        return;
    }

console.warn("no hay esa suscripcion");}

undefined
tipodeSuscripcion(basic);
VM4073:1 Uncaught ReferenceError: basic is not defined
    at <anonymous>:1:19
(anonymous) @ VM4073:1
tipodeSuscripcion("basic");
VM4005:6 puedes llevar algunos cursos
undefined
tipodeSuscripcion("lalalala");
VM4005:13 no hay esa suscripcion
tipodeSuscripcion @ VM4005:13
(anonymous) @ VM4230:1
undefined