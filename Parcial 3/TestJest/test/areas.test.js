// // areas.test.js
// import { areaCuadrado } from "../src/areas.js";

// test("Si le mando un 2 debe de dar 4", () => {
//   const res = areaCuadrado(2);
//   expect(res).toBe(4); // Compara que el resultado sea igual a 4
//   expect(typeof res).toBe("number"); // Verifica que el resultado es de tipo 'number'
// });
const { areaCuadrado } = require("../src/areas.js");

test("Si le mando un 2 debe de dar 4", () => {
    const res = areaCuadrado(2);
    expect(res).toBe(4); // Compara que el resultado sea igual a 4
    expect(typeof res).toBe("number"); // Verifica que el resultado es de tipo 'number'
});
