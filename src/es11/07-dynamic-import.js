const button = document.getElementById('button');
console.log(button);

button.addEventListener('click', async function () {
	const module = await import('./module.js');

	console.log('Se ha cargado module.js', module);

	module.getFromModule();
});
