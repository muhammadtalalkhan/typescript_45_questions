// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let usernames = ["eric", "john", "daniel", "admin", "sam"]
var usernames = [""];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == "") {
        console.log("We need to find some users!");
    }
    else if (!(usernames[i] == "")) {
        console.log("We have some users!");
        break;
    }
}
