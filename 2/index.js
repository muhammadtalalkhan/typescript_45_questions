//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// step number is store a person name in lowercase.
var personName = "Muhammad Talal";
var lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// step number 2 is to store a person name in uppercase.
var personName1 = "Muhammad Talal";
var uppercaseName = personName1.toUpperCase();
console.log(uppercaseName);
// step number 3 is to store a person name in titlecase
var personame3 = "muhammad Talal khan";
var titleCase = function (str) {
    var name1 = str.split(' ');
    var title = name1.map(function (item) { return (item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()); }).join(' ');
    console.log(title);
};
titleCase(personame3);
