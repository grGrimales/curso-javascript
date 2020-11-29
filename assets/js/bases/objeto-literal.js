let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo:false,
    edad: 40,
    coords: {
        lat:34.034,
        lng:-118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip:'10228541',
        ubicaion: 'Malibu, California'
    }

};

console.log( personaje );
console.log('Nombre', personaje.nombre);
console.log( 'Nombre', personaje['nombre'] );
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes [personaje.trajes.length -1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
//paraevitar que las propiedades de un objeto se puedan modificar usamos lo siguiente:

Object.freeze( personaje );

