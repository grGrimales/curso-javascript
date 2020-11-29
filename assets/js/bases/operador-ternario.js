const dia = 1;
const horaActual = 11;


let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6 ) {
    // if ([0,6].includes( dia ) ) {
    // console.log('Fin de semana');
    // horaApertura = 9;
// } else{
    // console.log('Dia de semana');
    // horaApertura = 11;
// }

horaApertura = ( [0,6].includes ( dia ) ) ? 9 : 11;

//if (horaActual >= horaApertura ) {
  //  mensaje = 'Esta abierto';
//} else{
    // mensaje = 
// }

mensaje = ( horaActual >= horaApertura) ? 'Está abierto' :`Esta cerrado, hoy abrimos a las ${ horaApertura }`;
console.log({ horaApertura, mensaje });