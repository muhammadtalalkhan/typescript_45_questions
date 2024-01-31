// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
var make_shirt = function (size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    return "The size of shirt is ".concat(size, " and the text is ").concat(text);
};
console.log(make_shirt("L"));
console.log(make_shirt("M"));
console.log(make_shirt("S", "I love JavaScript"));
