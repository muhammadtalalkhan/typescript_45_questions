// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
// that should be printed on the shirt. The function should print a sentence summarizing the size 
// of the shirt and the message printed on it. Call the function
var make_shirt = function (size, text) {
    return "The size of shirt is \"".concat(size, "\" and the text is \"").concat(text, "\"");
};
console.log(make_shirt("XL", "BE STRONG"));
