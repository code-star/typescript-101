// Exercise 1 - Convert from JavaScript to TypeScript
//
// Take this file and turn it into a TypeScript file. Make it more typesafe by adding and creating types where you can identify them.
//

var customers = [
	{
		name: 'Jan',
		lastName: 'Koper',
		company: 'Koophandel B.V.',
		address: {
			city: 'Utrecht',
			street: 'Utrechtsestraat 2',
			zipCode: '1234 AB'
		},
		role: 'Chief Buying Officer',
		age: 46
	},
	{
		name: 'Henk',
		lastName: 'Koopman',
		company: 'Koophandel B.V.',
		address: {
			city: 'Utrecht',
			street: 'Utrechtsestraat 2',
			zipCode: '1234 AB'
		},
		role: 'Chief Sales Officer'
	},
	{
		name: 'Freek',
		lastName: 'Koning',
		company: 'Koophandel B.V.',
		address: {
			city: 'Utrecht',
			street: 'Utrechtsestraat 2',
			zipCode: '1234 AB'
		},
		role: 'Owner',
		age: 68
	}
]

function getName(customer) {
	return customer.name + ' ' + customer.lastName
}

function getFullAddress(customer) {
	return customer.address.street + ', ' + customer.address.city
}

function getAge(customer) {
	if (!customer.age) {
		return -1
	}
	return customer.age
}

function isCloseToRetirement(customer) {
	return getAge(customer) > 67
}

console.log(getAge(customers[1]))
console.log(getFullAddress(customers[0]))
customers.forEach(function(c) {
	console.log(getName(c), isCloseToRetirement(c))
})
