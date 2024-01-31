// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list
var GuestList = [
    "Imran khan",
    "Allama Iqbal",
    "Muhammad Ali Jinah",
    "Waseem Badami",
];
// loop for each to print invitation
for (var _i = 0, GuestList_1 = GuestList; _i < GuestList_1.length; _i++) {
    var name_1 = GuestList_1[_i];
    console.log("Dear ".concat(name_1, ", you are invited to dinner please join us."));
}
var delguest = GuestList.slice(2, 3);
console.log("".concat(delguest, " did not make it"));
var newguest = GuestList.push("abdur Rahman");
console.log("".concat(GuestList[4], " would you like to join us"));
