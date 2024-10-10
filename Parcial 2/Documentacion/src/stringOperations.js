/**
* Módulo de operaciones de cadenas de texto
* @module stringOperations
*/
 
/**
* Convierte una cadena de texto a mayúsculas.
* @param {string} str - La cadena de texto a convertir.
* @returns {string} La cadena en mayúsculas.
*/
export function convertirMayusculas(str) {
    return str.toUpperCase();
}
 
/**
* Convierte una cadena de texto a minúsculas.
* @param {string} str - La cadena de texto a convertir.
* @returns {string} La cadena en minúsculas.
*/
export function convertirMinusculas(str) {
    return str.toLowerCase();
}
 
/**
* Invierte una cadena de texto.
* @param {string} str - La cadena de texto a invertir.
* @returns {string} La cadena invertida.
*/
export function invertirCadena(str) {
    return str.split('').reverse().join('');
}
 
/**
* Cuenta el número de palabras en una cadena de texto.
* @param {string} str - La cadena de texto a analizar.
* @returns {number} El número de palabras en la cadena.
*/
export function contarPalabras(str) {
    return str.trim().split(/\s+/).length;
}