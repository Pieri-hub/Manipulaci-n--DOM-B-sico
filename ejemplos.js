

function nombrecompleto(name,lastName){
   return name + " " + lastName;
}


function saludo(name,lastName,nickname){
    let nombretotal= nombrecompleto(name,lastName);

    console.log("Hola mi nombre es " + nombrecompleto + "pero me llaman" + nickname);

}