const string = 'Hello';

// El método .padStart() de un objeto de tipo string añade un string al principio hasta completar una longitud total.
// El primer parámetro es para la longitud total del string y el segundo el string con el que se va a rellenar.

console.log(string.padStart(string.length + 2, './'));

// El método .padEnd() de un objeto de tipo string añade un string al final hasta completar una longitud total.
// El primer parámetro es para la longitud total del string y el segundo el string con el que se va a rellenar.

console.log(string.padEnd(string.length + 4, '.jpg'));
