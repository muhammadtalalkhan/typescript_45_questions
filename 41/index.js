// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
var func = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr);
        break;
    }
};
var magician_names = ["George", "Fred", "Ron", "Harry", "Tom"];
func(magician_names);
