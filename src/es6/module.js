// const sayHelloTo = name => {
// 	return console.log(`Hello ${name}`);
// };

// export default sayHelloTo;

async function getData() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve([
				{
					movie: 'El despertar de los michis',
					year: 2021,
					protagonist: 'Mr. Michi',
				},
				{
					movie: '101 Michis',
					year: 2019,
					protagonist: 'Tommy Michiguire',
				},
			]);
		}, 1000);
	});
}
// Para exportar solo una función o variable se usa "default". Al importar se puede hacer con cualquier nombre
// Cuando se exporta más de una función o variable se hace con curly braces
export { getData };
