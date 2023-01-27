const asyncFunction = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve('Esto viene del resolve de asyncFunction');
			  }, 2000)
			: reject(new Error('Esto es el error de asyncFunction'));
	});
};

const arrowFunction = async () => {
	const something = await asyncFunction();
	console.log('Await dentro de arrowFunction', something);
	console.log('Este es el log final de arrowFunction');
};

console.log('Before');
arrowFunction();
console.log('After');
