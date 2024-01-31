"use strict";
// Pop method
//removes last element from an array and returns the deleted element
let arr = ["Hello", "Jamal", "Javed", "Jamshed", "Junaid"];
// Junaid will be deleted from arr and returns to popArr
let popArr = arr.pop();
console.log(arr);
console.log(popArr);
// // Push method
// // add element in the last element of an array and return the new length of arr
// let arr:string[] = ["Hello","Jamal", "Javed", "Jamshed"]
// // Junaid will be addad to the last index of arr after Jamshed
// let pushArr = arr.push("Junaid")
// Reverse method
// Reverse the order of an array like Junaid will be the first element and Hello will be last
var arr2 = ["Hello", "Jamal", "Javed", "Jamshed", "Junaid"];
arr2.reverse();
// //console.log(arr2)
console.log(arr2);
var arr3 = ["Hello", "Jamal", "Javed", 2, "Junaid", true];
var revArr1 = arr3.reverse();
console.log(arr3);
// Shift
// removes the first element from an array returns the deleted like pop method also changes the indexes of the array
var arr4 = ["Hello", "Jamal", "Javed", "Jamshed", "Junaid"];
var shiftArr = arr4.shift();
console.log(shiftArr);
console.log(arr4);
// Unshift
// add an element at the start of an element and return it's length also changes it's indexes
var arr5 = ["Jamal", "Javed", "Jamshed", "Junaid"];
var unshiftArr = arr5.unshift("Hello");
console.log(arr5);
console.log(unshiftArr);
// Slice
// takes a slice from an array
// return the sliced elements
var arr6 = ["Hello", "Jamal", "Javed", "Jamshed", "Junaid"];
console.log(arr6);
// picks elements of index 1 to 2
let sliceArr = arr6.slice(0, 1);
console.log(sliceArr);
