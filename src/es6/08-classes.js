// Declarar
class userExample {}

// Instanciar
const newUser = new userExample();

class User {
	// Métodos
	greeting() {
		return 'Hello';
	}
}

const cesar = new User();
console.log(cesar.greeting());

// Herencia
const developer = new User();
console.log(developer.greeting());

// Constructor

class UserWithConstructor {
	// Constructor
	constructor() {
		console.log('Nuevo usuario');
	}
	// Métodos
	greeting() {
		return 'Hello';
	}
}

const userWithConstructor = new UserWithConstructor();

console.log(userWithConstructor.greeting);

// this
class UserWithThis {
	constructor(name) {
		this.name = name;
	}
	speak() {
		return 'Hello';
	}
	greeting() {
		return `${this.speak()} ${this.name}`;
	}
}

const ana = new UserWithThis('Ana');
console.log(ana.greeting());

// Getters and Setters
class UserWithGettersAndSetters {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	speak() {
		return 'Hello';
	}
	greeting() {
		return `${this.speak()} ${this.name}`;
	}
	get uAge() {
		return this.age;
	}
	set uAge(n) {
		this.age = n;
	}
}

const userWithGettersAndSetters = new UserWithGettersAndSetters('César', 33);
console.log(userWithGettersAndSetters.uAge);
console.log((userWithGettersAndSetters.uAge = 35));
