// all the datatype and return type should be properly anotated
// return type will be written after the () parenthesis
// if we want to return void then we will write void there
// we can make parameter optional into two ways:
// 1. function calculateTax(income: number, taxYear? : number{} (which will be undefined)
// 2. by directly putting the value (in this case if value is passed then it will be overwritten)
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

// NOTE: JavaScript by default returns undefined
// undefined is not a number

console.log(calculateTax(10_000, 2022));
console.log(calculateTax(10_000));
