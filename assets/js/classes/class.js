

class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un metodo estatico')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase ){

        this.nombre= nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }
    //SETS o GETS:gets para recuperar un valor
    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita ( ){
        return `La comida favorita de ${ this.nombre } es ${ this.comida}`;
    }


    //METODOS
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${ this.codigo }`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }
}

const spidermar = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino');
console.log( spidermar );

//invocando a los metodos
//spidermar.quienSoy();
spidermar.miFrase();
spidermar.setComidaFavorita ='El pie de cereza de la tia May';
//console.log( spidermar );
//console.log( spidermar.getComidaFavorita );
//console.log( spidermar );

//Persona._conteo =2;
console.log( 'Conteo estatico', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();