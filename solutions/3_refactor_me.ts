// Exercise 3
// Use classes, functions and/or interfaces/types to refactor a JS file into a TS file.
// Make it  more typesafe and readable where you can.
//

interface IUser {
	name: string;
	type: string;
	age?: number;
	occupation?: string;
	setAge(age: number): void;
	setOccupation(occupation: string): void;
}


class User implements IUser {
	name: string;
	type: string;
	age?: number;
	occupation?: string;
	
	constructor(name: string, type: string = 'unknown', age?: number, occupation?: string) {
		this.name = name;
		this.type = type;
		this.age = 0;
		this.occupation = occupation;
	}

	setAge(age: number): void {
		if (age > 0) {
			this.age = age;
		}
	}

	setOccupation(occupation: string): void {
		this.occupation = occupation;
	}
}


const userList: IUser[] = []
userList.push(new User('Freek', 'user'))
userList.push(new User('Anna', 'admin'))
userList.push(new User('Secret spy person'))

userList[2].setOccupation('Spy')

console.log(userList)
