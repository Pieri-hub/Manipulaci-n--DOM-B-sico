var articulos=[
    { nombre:"lapiz", costo:2000 },
    { nombre:"lapicero", costo:3000 },
    { nombre:"lupa", costo:200 },
    { nombre:"lima", costo:40 },
    { nombre:"ludo", costo:250 },
    { nombre:"ladrillo", costo:20 },

]

var buscararticulo = articulos.find(function(articulo){
    return articulo.nombre===ludo
});

buscararticulo;
