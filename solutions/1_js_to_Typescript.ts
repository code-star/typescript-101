const customers: Customer[] = [
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
];

interface Customer {
	name: string;
	lastName: string;
	company: string;
	address: Address;
	role: string;
	age?: number;
}

type Address = {
	city: string;
	street: string;
	zipCode: string;
};

function getName(customer: Customer): string {
	return customer.name + ' ' + customer.lastName;
}

function getAddress(customer: Customer): string {
	return customer.address.street + ', ' + customer.address.city;
}

function getAge(customer: Customer): number {
	if (!customer.age) {
		return -1;
	}
	return customer.age;
}

function isCloseToRetirement(customer: Customer) {
	return getAge(customer) > 67;
}

console.log(getAge(customers[1]));
console.log(getAddress(customers[0]));
customers.forEach(c => {
	console.log(getName(c), isCloseToRetirement(c));
});
