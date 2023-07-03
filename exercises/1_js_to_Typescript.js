// Exercise 1 - Convert from JavaScript to TypeScript
//
// Take this file and turn it into a TypeScript file. Add the missing types to the variables and functions.
//

var firstName = "Henk";
var age = 33;
var hasChildren = false;
var parents = ["John", "Mary"];
var parentAges = [55, 48];
var variousValues = ["22", 21, 98, "33", "11"];

var userInfo = {
  name: firstName,
  age: age,
  hasChildren: hasChildren,
};

function isAdult(age) {
  return age > 18;
}

function makeString(input) {
  return input.toString();
}

function uppercase(input) {
  return input.toUpperCase();
}
