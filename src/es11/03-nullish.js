// El operador de nullish '??' devuelve un número por defecto si el número que se está evaluando es null.

const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate);

const anotherNullNumber = null;
const validate2 = anotherNullNumber ?? 5;
console.log(validate2);

