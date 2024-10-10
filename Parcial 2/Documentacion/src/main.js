// Importa las funciones del módulo stringOperations
import { convertirMayusculas, convertirMinusculas, invertirCadena, contarPalabras } from './stringOperations.js';
 
// Uso de las funciones
const texto = "Hola Mundo";
console.log("Texto en mayúsculas: ", convertirMayusculas(texto)); // Texto en mayúsculas: HOLA MUNDO
console.log("Texto en minúsculas: ", convertirMinusculas(texto)); // Texto en minúsculas: hola mundo
console.log("Texto invertido: ", invertirCadena(texto)); // Texto invertido: odnuM aloH
console.log("Número de palabras: ", contarPalabras("Esta es una cadena de ejemplo.")); // Número de palabras: 6

