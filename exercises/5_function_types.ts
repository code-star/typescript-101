// Exercise 5 - Function types
// See if you can write Function types for the provided functions

const multiplyByFour = (input: number): number => {
    return input * 4
}

const convertToNumber = (input: string | number, round?: boolean): number => {
    const number = Number(input)
    if (!round) {
        return number
    }
    return Math.round(number)
}

const getAge = (user: { name: string, age: number }): number => {
    return user.age
}

const modifyUserAge = (user: { name: string, age: number }, newAge: number): { name: string, age: number } => {
    return {
        ...user,
        age: newAge
    }
}

// This one is a little more complex. See it you can create a type for this object.
// It will be a combination of an object type with functions types.
// Example type:

type ExampleObjectType = {
    age: number
    getAge: () => number
}

const functionMapping = {
    mappingFor: 'user',
    getName: (user: { name: string, age: number }): string => user.name,
    isAdult: (user: { name: string, age: number }): boolean => user.age >= 18,
    combine: (user1: { name: string, age: number }, user2: { name: string, age: number }): Array<{ name: string, age: number }> => [user1, user2]
}
