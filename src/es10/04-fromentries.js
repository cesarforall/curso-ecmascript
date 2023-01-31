// El método .fromEntries([[arrays],[de],[arrays]]) del objeto Object devuelve un objeto clave valor desde un array de arrays
const entries = new Map([
	['name', 'cesar'],
	['age', 33],
]);
console.log(entries);
console.log(Object.fromEntries(entries));

const entries2 = [
	['name', 'cesar'],
	['age', 33],
];
console.log(entries2);
console.log(Object.fromEntries(entries2));
