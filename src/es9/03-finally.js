// .finally envía una respuesta cuando la promesa termina

const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		if (false) {
			resolve('=)');
		} else {
			reject('=(');
		}
	});
};

anotherFunction()
	.then(response => console.log(response))
	.catch(err => console.log(err))
    .finally(() => { console.log('La promesa termino'); });
