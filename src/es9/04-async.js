async function* anotherGenerator() {
	yield await Promise.resolve(1);
	yield await Promise.resolve(2);
	yield await Promise.resolve(3);
	yield await Promise.resolve(4);
}

const other = anotherGenerator();
other.next().then(response => console.log(response));
other.next().then(response => console.log(response));
other.next().then(response => console.log(response));
other.next().then(response => console.log(response));
other.next().then(response => console.log(response));
console.log('Úlmima línea de código');

async function arrayNames(array) {
	for await (let value of array) {
		console.log(value);
	}
}

const names = arrayNames(['Cesar', 'Otro', 'Other']);

console.log(names);
