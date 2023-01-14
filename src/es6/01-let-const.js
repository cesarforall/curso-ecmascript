var name = 'César';
name = 'Alejandro';
console.log(name);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// const no es reasignable
const animal = 'Dog';
// animal = 'Cat';
console.log(animal);

const fruits = () => {
	if (true) {
		var fruit1 = 'Banana'; // funtion scope (global)
		let fruit2 = 'Pear'; // block scope (local)
		const fruit3 = 'Watermelon'; // block scope (local)
	}
	console.log(fruit1);
	// console.log(fruit2);
	// console.log(fruit3);
    
};
fruits();
