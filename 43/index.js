// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one 
// array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_names = ["George", "Fred", "Ron", "Harry", "Tom"];
var make_great = function (arr) {
    var greatMagicians = __spreadArray([], arr, true);
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = "The Great \"".concat(greatMagicians[i], "\"");
    }
    return greatMagicians;
};
var show_magicians = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
var greatMagicians = make_great(magician_names);
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("Great Magicians:");
show_magicians(greatMagicians);
