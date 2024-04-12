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

