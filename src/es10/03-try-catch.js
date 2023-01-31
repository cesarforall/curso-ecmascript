try {
	hello();
} catch (error) {
	console.log(error);
}

// A partir de es10 se permite usar el catch obtener el erro

try {
	anotherFn();
} catch {
	console.log('Esto es un error');
}
