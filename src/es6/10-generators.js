// Un generador es una función que devuelve objetos iterables por medio de la palabra reservada yeld.
// Un objeto iterable es un objeto que tiene el método iterator. Esto permite que al ser llamado el objeto() pueda pasar por cada elemento a cada llamada con el método next.
// La palabra reservada return devuelve el valor dado como argumentoy finaliza el generador. Cuando se invoca el método return y la iteración no ha terminado actúa como next.

function* iterate(array) {
	for (let value of array) {
		yield value;
	}
    return 'Hello';
}

const it = iterate(['César', 'Almeida', 'Reyes', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

console.log(it.throw());
