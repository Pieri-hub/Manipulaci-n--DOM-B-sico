var articulos=[
    { nombre:"lapiz", costo: 50},
    { nombre:"lapicero", costo:500},
    { nombre:"cuaderno", costo:100},
    { nombre:"lupa", costo: 850},
    { nombre:"cuchara", costo: 85},
    { nombre:"taper", costo: 100},
    { nombre:"laptop", costo: 2000},

]
 var articulosFiltrados= articulos.filter(function(articulo){
    return articulo.costo<=100;
 });

 articulosFiltrados;
