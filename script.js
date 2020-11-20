//Function 1 - Rest Parameter:
const sumRest = (...numbers) => numbers.reduce((prev, current) => prev + current)

console.log(sumRest(1, 2, 3, 4, 5));

//Function 2 - Spread Operator:
const sumSpread = (x, y, z) => x + y + z;

let num = [1, 2, 3];

console.log(sumSpread(...num));