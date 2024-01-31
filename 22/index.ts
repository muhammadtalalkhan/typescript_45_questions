// Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program



// const myArray = [1, 2, 3, 4, 5];
// const indexToAccess = 10;

// if (indexToAccess < 0 || indexToAccess >= myArray.length) {
//   throw new Error('Index out of bounds');
// }

// const element = myArray[indexToAccess];
// console.log(element);

const myArray = [1, 2, 3, 4, 5];
const indexToAccess = 10;  // Try changing this index to an invalid value

// Intentional Error: Access an index that is out of bounds
const element = myArray[indexToAccess];

// The following line won't be reached if the error occurs
console.log(element);