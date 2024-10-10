# Módulo de Operaciones con Cadenas de Texto - `stringOperations`
 
Este proyecto es un módulo de JavaScript que proporciona funciones para manipular cadenas de texto. El módulo incluye funciones para convertir texto a mayúsculas, minúsculas, invertir cadenas y contar el número de palabras. El código está documentado utilizando JSDoc para generar documentación detallada automáticamente.
 
## Contenido del Módulo
 
El módulo incluye las siguientes funciones:
 
- **convertirMayusculas(str)**: Convierte una cadena de texto a mayúsculas.
- **convertirMinusculas(str)**: Convierte una cadena de texto a minúsculas.
- **invertirCadena(str)**: Invierte una cadena de texto.
- **contarPalabras(str)**: Cuenta el número de palabras en una cadena de texto.
 
## Instalación
 
Este módulo no requiere instalación. Simplemente importa las funciones que necesites en tu archivo JavaScript.
 
### Ejemplo de Uso
 
```javascript
// Importa las funciones del módulo stringOperations
import { convertirMayusculas, convertirMinusculas, invertirCadena, contarPalabras } from './stringOperations.js';
 
const texto = "Hola Mundo";
 
console.log("Texto en mayúsculas: ", convertirMayusculas(texto)); // Texto en mayúsculas: HOLA MUNDO
console.log("Texto en minúsculas: ", convertirMinusculas(texto)); // Texto en minúsculas: hola mundo
console.log("Texto invertido: ", invertirCadena(texto)); // Texto invertido: odnuM aloH
console.log("Número de palabras: ", contarPalabras("Esta es una cadena de ejemplo.")); // Número de palabras: 6