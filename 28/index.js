"use strict";
// // Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// // Set a value for the variable age, and then:
// // • If the person is less than 2 years old, print a message that the person is a baby.
// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// // • If the person is age 65 or older, print a message that the person is an elder.
let persons_age = 20;
if (persons_age >= 2) {
    console.log(`your still a baby`);
}
else if (persons_age > 2 && persons_age < 4) {
    console.log(`your are toddler`);
}
else if (persons_age > 4 && persons_age < 13) {
    console.log(`you are kid`);
}
else if (persons_age > 13 && persons_age < 20) {
    console.log("You are a teenager");
}
else if (persons_age > 20 && persons_age < 65) {
    console.log("You are an adult");
}
else if (persons_age > 65) {
    console.log("You are an elder person");
}
