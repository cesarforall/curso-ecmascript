// Flat
const array = [1, 2, 3, 4, [1, 3, 5, 6, 7, [1, 3, 6, 7]]];
console.log(array.flat(3));

// Flatmap
const array2 = [1, 2, 3, 4, [1, 3, 5, 6, 7, [1, 3, 6, 7]]];
console.log(
	array2.flatMap(value => {
		return [value, value * 2];
	}),
);
