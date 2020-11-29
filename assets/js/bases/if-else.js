let a = 12;

if ( a <= 10 ) {
    console.log('A es menor o igual a 10');
} else{
    console.log('A es mayor que 10')
}

//console.log('Fín de programa');

const hoy = new Date() //new nos permite crear una nueva instancia de un objeto
let dia = hoy.getDay(); // 0 es domingo, 1es lunes...

console.log({ dia });


if (dia === 0){
    console.log('Domingo');
} else if( dia === 1){
    console.log('Lunes');
} else if ( dia === 2 ){
    console.log('Martes');
} else{
    console.log('No es lunes, martes o domingos')
}
dia = 0
const  diasSemana = {6: 'Sabado', 5:'viernes', 4:'jueves', 3:'miercoles', 2:'martes', 1:'lunes', 0:'domingo',};
console.log(diasSemana[dia]);