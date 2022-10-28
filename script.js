const h1= document.querySelector("h1");
const p= document.querySelector("p");
const input1 =document.querySelector(".input1");
const input2 =document.querySelector(".input2");
const button=document.querySelector("button");
const resultado= document.querySelector(".resultado");


console.log([
    h1,
    p,
    input1,
    input2,

]);

function butononclick(){
    const suma= Number (input1.value) + Number(input2.value);
    resultado.innerText= "Resultado" + suma;
};

const img = document.createElement("img");
img.setAttribute("src", "https://thumbs.dreamstime.com/z/letras-de-madera-coloridas-del-alfabeto-en-un-fondo-blanco-86964954.jpg");
console.log(img);
p.append(img);





