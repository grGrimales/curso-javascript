class Singleton {

    static instancia;
    nombre = '';
    constructor( nombre = '') {

        if( !!Singleton.instancia){
            return Singleton.instancia;
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;

        //return this;
    }
}

const instancia1 = new Singleton('Ironman');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);