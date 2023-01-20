function newUser(name, age, country) {
	var name = name || 'César';
	var age = age || 33;
	var country = country || 'Ecuador';
	console.log({ name, age, country });
}
newUser()
newUser('Calisto', 46, 'Australia');

// ES6 - Function with default params
function newAdmin (name = 'Me', age = 18, country = 'Finlandia', alive=false) {
    console.log({name, age, country, alive});
}
newAdmin();
newAdmin('You', 15, 'Nowhere', true);