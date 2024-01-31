// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
function make_sandwich() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.includes("beef") && args.includes("cheese")) {
        console.log("It's a beef sandwich with cheese");
    }
    else if (args.includes("chicken") && args.includes("cheese")) {
        console.log("It's a chicken sandwich with cheese");
    }
    console.log(args);
}
make_sandwich("beef", "salad", "bread", "mayonese", "cheese");
