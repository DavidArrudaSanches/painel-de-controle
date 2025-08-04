// js/modules/uiUpdater.js

/**
 * Atualiza um elemento do DOM com um novo texto e uma nova classe.
 * @param {HTMLElement} displayElement - O elemento da pagina a ser atualizado
 * @param {object} statusInfo - Um objeto contendo {text, className}
*/

export function updateDisplay(displayElement, {text, className}){
    if (!displayElement) return;

    displayElement.textContent = text
    displayElement.className = className
}
