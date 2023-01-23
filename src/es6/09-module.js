// Para poder usar módulos, el archivo package.json necesita el flag "type": "module"
// El módulo desde el que se importa necesita tener la extensión (.js). Dependiendo del editor, entorno desde el que se está ejecutando se puede omitir porque tiene su propia configuración para entenderlo sin la extensión

// import sayHelloTo from './module.js';
// sayHelloTo('César');

// Para importar con un nombre distinto el módulo tiene que exportarse como default
// En el caso contrario se deben usar curly braces
import { getData } from './module.js';

function solution() {
	return getData();
}