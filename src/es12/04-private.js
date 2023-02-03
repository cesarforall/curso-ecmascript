// Los métodos y propiedades de los objetos por defecto son públicos.
// Los métodos privados se declaran con el símbolo de hashtag (almohadilla) delante del nombre de la función o propiedad dentro de la clase.
// Los getters and setters al ser privados no dan error al ser invocados. Sin embargo no modifican los valores.
class UserWithGettersAndSetters {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	#speak() {
		return 'Hello';
	}
	greeting() {
		return `${this.speak()} ${this.name}`;
	}
	get #uAge() {
		return this.age;
	}
	set #uAge(n) {
		this.age = n;
	}
}

const userWithGettersAndSetters = new UserWithGettersAndSetters('César', 33);
console.log((userWithGettersAndSetters.uAge = 35));
console.log(userWithGettersAndSetters.uAge);
console.log(userWithGettersAndSetters.age);
console.log(userWithGettersAndSetters.greeting);
