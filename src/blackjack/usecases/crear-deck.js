// Función para barajear un arreglo (algoritmo: Fisher-Yates)
const shuffle = (array) => {
    // Recorre el arreglo desde el último elemento al primero
    for (let i = array.length - 1; i > 0; i--) {
        // Genera un índice aleatorio entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambia los elementos en las posiciones i y j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tipos
 * @param {Array<string>} especiales 
 * @returns {Array<string>}
 */
export const crearDeck = ( tipos, especiales ) => {
    if(!tipos) throw new Error('Tipos de carta obligatorio')
    
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    
    for (let especial of especiales) {
        for (let tipo of tipos) {
            deck.push(especial + tipo);
        }
    }

    deck = shuffle(deck);
    return deck;
}