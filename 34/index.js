// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the 
// name of the pizza. For each pizza you should have one line of output containing a simple statement 
// like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an 
// additional sentence, such as I really love pizza!
var pizza = ["Vegetarian pizza", "pepperoni pizza", "margherita pizza"];
var lower = pizza.map(function (word) { return word.toLowerCase(); });
for (var i = 0; i < lower.length; i++) {
    if (lower[i] == "vegetarian pizza") {
        console.log("I like Vegetarian Pizza because I love vegetables");
    }
    if (lower[i] == "pepperoni pizza") {
        console.log("I love Pepperoni Pizza because it's spicy");
    }
    if (lower[i] == "margherita pizza") {
        console.log("I love Margherita Pizza because of it's simple taste");
    }
}
console.log("I really love pizza!");
