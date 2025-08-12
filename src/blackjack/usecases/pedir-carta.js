

/**
 * 
 * @param {Array<string>} deck 
 * @returns {<string>} Retorna  la ultima carta de la baraja 
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {



    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


