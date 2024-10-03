

const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const archivo = fs.readFileSync(path.join(__dirname, "Objeto.yml"), 'utf8');
const estYaml = YAML.parse(archivo);

console.log(typeof estYaml);
console.table(estYaml);

//npm i yaml
