const regresaTrue = () => {
    console.log( 'Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log( 'Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true

console.log( !regresaFalse() ); //true

console.log( true && true); //true
console.log( true && !false ); //true

console.log('===&&===');
console.log( regresaFalse() && regresaTrue()); //false
console.log( regresaTrue() && regresaFalse()); //false

console.warn('OR ');//true
console.log(true || false );
console.log(false || false );

console.log( regresaTrue() || regresaFalse() );
console.log( regresaFalse() || regresaTrue()); //false

console.log('4 condiciones', true|| true|| true|| false);


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
console.log({a1, a2, a3, a4 });
