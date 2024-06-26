/**
 * Data types that introduces in TypeScript:
 * 1. any
 * 2. unknown
 * 3. never
 * 4. enum
 * 5. tuple
 */

/**
 * NOTE: 
 * 1. If we initialize a variable then typescript understand the datatype of that variable so if we donot write the datatype but intialized we can see the datatype whenever we hover on the datatype
 * 2. If we donot initialize and as well as not mentioning the datatypes the typescript will label it with any datatype.
 */
let sales: number = 123_456_789;
let corse: string = "TypeScript";
let is_Published: boolean = true;
let level;

// --------------The any type-------------
// As a best practice we should avoid using any type in TS.
function render(document: any) {
  console.log(document);
}


// -----------------Arrays--------------------
// we want to make an array of number datatype
let numbers: number[] = [1, 2, 3];
// let arr = []; // The type of array will be any and we should avoid this in TS
// declare an empty array of number datatype
let arr: number[] = [];
// now we can access all the methods of the number which we don't get in JS
arr.forEach(n => n.toFixed())

// ---------------Tuples--------------------
// tuple is a fixed length of array where each element has a particular type we often use with pair of values
// tuples are useful when we have only two values
// 1, 'Anupama'
// here first element will be number and second element will be string
let user: [number, string] = [1, "Anupama"];
// we can access first element with index and can use methods
console.log(user[1].toUpperCase());

// -----------------Enums----------------
// Enum represents the list of related constant
const small = 1;
const medium = 2;
const large = 3;
// PascalCase
// if we initialize the first varible then next will be automatically contain next values by the compiler
enum Size {
  Small = 1,
  Medium,
  Large,
}
// access enum
let mySize: Size = Size.Medium;
console.log(mySize); // 2
// if we declare our enum as constant then our compiler will generate more optimized code in javascript

