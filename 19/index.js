"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
let GuestList = [
    "Imran khan",
    "Allama Iqbal",
    "Muhammad Ali Jinah",
    "Waseem Badami"
];
for (let name of GuestList)
    console.log(`hey ${name} would you like to join me on dinner`);
console.log(`The number of people i'm inviting is ${GuestList.length}`);
