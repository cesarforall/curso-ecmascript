const user = {
	username: 'César',
	age: 34,
	country: 'Spain',
};

// Todo lo demás se asigna a la variable con spread

const { username, ...values } = user;

console.log(username);
console.log(values);
