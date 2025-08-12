import _, { defaults } from 'underscore';


/**
 * Esta funcion crea un nuevo deck de cartas
 * @param {Array <string>} tipoDeCartas  Ejemplo : ['C','D','H','S'];
 * @param {Array <string>} tiposEspeciales Ejemplo : ['A','J','Q','K'];
 * @returns {Array<string>}
 */


export  const crearDeck = (tipoDeCartas, tiposEspeciales) => {

    if (!tipoDeCartas || tipoDeCartas.length === 0)
        throw new Error('TiposDeCartas es obligatorio como un arreglo de string')
    
    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

