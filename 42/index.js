// Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the 
// Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_names = ["George", "Fred", "Ron", "Harry", "Tom"];
var show_magicians = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
var make_great = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = "The Great \"".concat(arr[i], "\"");
    }
};
make_great(magician_names);
show_magicians(magician_names);
