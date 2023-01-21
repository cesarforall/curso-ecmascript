// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring
let user = {
	username: 'César',
	age: 33,
};

let { username, age } = user;
console.log(username, age);
console.log(user['username'], user.age);

// Spread operator
let person = { name: 'César', age: '33' };
let country = 'Spain';

let data = { id: 1, ...person, country };
console.log(data);

// Rest
function sum(num, ...values) {
	console.log(values);
	console.log(typeof values);
	console.log(num + values[0]);
	return num + values[0];
}
sum(1, 1, 2, 3, 4, 4);

// Challenge
function solution(
	json1 = {
		name: 'Mr. Michi',
		food: 'Pescado',
	},
	json2 = {
		age: 12,
		color: 'Blanco',
	},
) {
	const combinedObject = { ...json1, ...json2 };
	return combinedObject;
}
console.log(solution({
	name: 'Bigotes',
	food: 'Pollito',
}));
