//Cuando  queremos crear un objeto literal y la variable va a tener el mismo nombre que el atributo no es necesario escribirlo dos veces

//function crearPersona( nombre, apellido ){
  //  return{ nombre,apellido}
//}
//const persona = crearPersona( 'Grediana', 'Rojas');
//console.log( persona );

const crearPersona = ( nombre, apellido ) => ({nombre,apellido});

const persona = crearPersona( 'Grediana', 'Rojas');
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
        
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    //console.log( args );
    return args;
}

const [casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Grediana', 'Hola');
console.log({casado, vivo, nombre, saludo});


const { apellido: nuevoApellido } = crearPersona('Grediana', 'Rojas');
console.log({ nuevoApellido});

const tony ={
    nombre: 'Tony Stark',
    codeName:'Iroman',
    vivo:false,
    edad:40,
    trajes: ['Mark I', 'Mark V'],
};


const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}

console.log({tony});