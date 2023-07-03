// Exercise 6 - Function types
// Write function types for the provided functions.

type MultiplyByFour = (input: number) => number;

const multiplyByFour: MultiplyByFour = (input) => {
  return input * 4;
};

type ConvertToNumber = (input: string | number, round?: boolean) => number;

const convertToNumber: ConvertToNumber = (input, round) => {
  const number = Number(input);
  if (!round) {
    return number;
  }
  return Math.round(number);
};

type User = {
  name: string;
  age: number;
};
type GetAge = (user: User) => number;

const getAge: GetAge = (user) => {
  return user.age;
};

type ModifyUserAge = (user: User, newAge: number) => User;

const modifyUserAge: ModifyUserAge = (user, newAge) => {
  return {
    ...user,
    age: newAge,
  };
};

type FunctionMapping = {
  mappingFor: "user"; // or string
  getName: (user: User) => User["name"];
  isAdult: (user: User) => boolean;
  combine: (userA: User, userB: User) => User[];
};

const functionMapping: FunctionMapping = {
  mappingFor: "user",
  getName: (user) => user.name,
  isAdult: (user) => user.age >= 18,
  combine: (userA, userB) => [userA, userB],
};
