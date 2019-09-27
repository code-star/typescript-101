// Exercise 3
// Use classes, functions and/or interfaces/types to refactor a JS file into a TS file.
// Make it  more typesafe and readable where you can.
//

function Person(name, gender = 'unknown') {
	this.name = name
	this.gender = gender
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

const people = []
people.push(new Person('Freek', 'male'))
people.push(new Person('Anna', 'female'))
people.push(new Person('Secret spy person'))

people[2].setOccupation('Spy')

console.log(people)
