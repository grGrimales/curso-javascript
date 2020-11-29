//import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
import './styles.css';
//import { buscarHeroe, buscarHeroeAsync } from './js/promesas';


//promesaRapida.then( console.log );

//Promise.race([ promesaLenta, promesaMedia, promesaRapida ])

        //.then( console.log )
       // .catch( console.warn );

//buscarHeroe( 'capi2' )
  //      .then( heroe => console.log(heroe) )
    //    .catch( console.warn );

//buscarHeroeAsync( 'iron2' )
  //      .then( heroe => console.log(heroe) )
    //    .catch( console.warn );

  import { obtenerHeroesArr, obtenerHeroeAwait, obtenerHeroeAwai } from './js/await.js';


  obtenerHeroeAwait( 'capi')
    .then( heroe => {
      console.log( heroe )

      console.timeEnd('await');
    });

