function saludar(nombre ){
    console.log( arguments );
    console.log('Hola ' + nombre);

}

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


saludar('Grediana', 27, true, 'Venezuela');
//saludar2('Saymon y Lucía')

saludarFlecha();
saludarFlecha2('Carlos');

function sumar(a,b ){
    return a + b;

}

//const sumar2 = (a,b) => {
//    return a+b;
//}
const sumar2 = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

 console.log( sumar(1,2));
 console.log(sumar2 (3,2));
 console.log(getAleatorio2);
