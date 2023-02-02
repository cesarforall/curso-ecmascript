// Globalthis es la propiedad global que hace referencia al objeto global this. Se creó para generalizar el acceso al objeto global en todos los contextos posibles.

console.log(window); // navegador
console.log(global); // node
console.log(self); // web worker
console.log(globalThis);