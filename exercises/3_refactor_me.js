// Exercise 3
// Use classes, functions and/or interfaces/types to refactor a JS file into a TS file.
// Make it  more typesafe and readable where you can.
//

function User(name, type = 'unknown') {
	this.name = name
	this.type = type
	this.age = 0
	this.occupation = 'unknown'
	this.setAge = function(age) {
		if (age > 0) {
			this.age = age
		}
	}
	this.setOccupation = function(occupation) {
		this.occupation = occupation
	}
}

const users = []
users.push(new User('Freek', 'user'))
users.push(new User('Anna', 'admin'))
users.push(new User('Secret spy person'))

users[2].setOccupation('Spy')

console.log(users)
