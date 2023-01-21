// Enhanced object literals
function newUser(user, age, country) {
	return {
		user: user,
		age: age,
		country: country,
	};
}

function newUserEnhanced(user, age, country, uId) {
	return {
		user,
		age,
		country,
        id: uId
	};
}

console.log(newUserEnhanced('César', 33, 'Spain', 1))