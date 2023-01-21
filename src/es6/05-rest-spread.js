// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = {
	username: 'César',
	age: 33,
};

let {username, age} = user;
console.log(username, age);
console.log(user['username'], user.age);