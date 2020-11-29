//const arr = new Array(10);
//console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Trigger'];
console.log({videoJuegos});


let arregloCosas = [ true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light']
];

console.log( arregloCosas [7][3]);
//Para imprimir el elemnto con su indice.

videoJuegos.forEach((elemento, indice, arr)  => {
    console.log({ elemento, indice, arr });
});

//Paraa agregar un elemto en la ultima posicion en un array
let nuevaLongitud = videoJuegos.push( 'F-Zero' );
console.log({nuevaLongitud, videoJuegos});

//Para agregar elementos al principio del array
nuevaLongitud = videoJuegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, videoJuegos});

//Para eliminar el ultimo  elemnto del array
let juegoBorrado = videoJuegos.pop();
console.log({ juegoBorrado, videoJuegos});

//Para eliminar un elemnto en especifico
let pos = 1;
console.log( videoJuegos );
let juegoBorrados = videoJuegos.slice( pos, 2);
console.log({juegoBorrados, videoJuegos});

//Como obtener el indice de un elemento del array
let megamanIndex = videoJuegos.indexOf('Megaman');
console.log ({ metroIndex});

