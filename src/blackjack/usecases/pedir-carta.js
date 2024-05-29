/**
 * @param {Array<String>} deck
 * @returns {String}
 */
export const pedirCarta = (deck) => (deck.length == 0) ? console.log('No hay cartas en el deck') : deck.pop();