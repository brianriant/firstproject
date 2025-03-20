console.log("hello");

//let name = "brian";
//console.log("name");
//rules :can't be a reserved key word
//should be meaningful labels or Names
//can't use a Number
//can't use space or hyphen
//case sensitive
//let firstName; //camel notation

// constants can't be resigned
const intrestRate = 0.3;
//console.log(intrestRate);

//primitives/ valuetypes
//let age = 30; //number literal
//let isApproved = false; //boolean literal
//let firstName = undefined;
//let selectColor = null;
//object literal
//let person = {
//  name: "mosh",
//  age: 30,
//};
//dot notnotation
//person.name ='john';
//bracket notation
//person ('name') = 'mary';

//console.log(person);
//Array used to list items
let selectedcolors = ["red", "blue"];
selectedcolors[2] = "green ";
console.log(selectedcolors);
// functions functions are one of the fundamental building blocks in JavaScript A function is basically a set of statements that performs a task or calculates a value Let me show you a couple of examples
function greet(name , lastName) {
  console.log("hello" + name + ''+ lastName);
}
greet('john', 'smith');


function square(number )
