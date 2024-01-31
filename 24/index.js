// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one 
// False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var string = "Pakistan";
console.log("The country is Pakistan?....right??");
console.log(string == "Pakistan");
var string2 = "Pakistan";
console.log("The country is Bangladesh?....right??");
console.log(string2 == "Bangladesh");
var str1 = "Peshawar";
var str2 = "pakistan";
var lowerStr1 = str1.toLowerCase;
var lowerStr2 = str2.toLowerCase;
if (lowerStr1 === lowerStr2) {
    console.log("Both Variables are equal ");
    console.log(lowerStr1 == lowerStr2);
}
var str = "Peshawar";
var str_ = "pakistan";
var lowerStr = str1.toLowerCase;
var lowerStr_ = str2.toLowerCase;
if (lowerStr === lowerStr_) {
    console.log("Both Variables are not equal ");
    console.log(!(lowerStr == lowerStr_));
}
if (10 == 5 + 5) {
    console.log("5 + 5 is not equal to 10");
    console.log(!(10 == 5 + 5));
}
if (10 == 5 + 5) {
    console.log("5 + 5 equals 10");
    console.log(10 == 5 + 5);
}
if (10 >= 10) {
    console.log("10 equals 10");
    console.log(10 >= 10);
}
if (10 >= 10) {
    console.log("10 is not equal to 10");
    console.log(!(10 >= 10));
}
var a = 10 > 10;
console.log("10 is not greater than 10");
console.log(!(10 > 10));
var b = 10 > 10;
console.log("10 is greater than 10");
console.log(10 > 10);
var a1 = 10 > 5;
var b1 = 10 < 5;
if (a1 || b1) {
    console.log("10 > 5 or 10 < 5 one of them is true");
    console.log(a1 || b1);
}
var a2 = 10 > 5;
var b2 = 10 < 5;
console.log("10 > 5 or 10 < 5 both of them is true");
console.log(a2 && b2);
var a3 = ["mango", "apple", "banana", "guava"];
var a4 = "string";
console.log(Array.isArray(a3));
console.log(Array.isArray(a4));
