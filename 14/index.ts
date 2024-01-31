//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner.
//   Then use your list to print a message to each person, inviting them to dinner.


let GuestList: string[] = [
    "Imran khan",
    "Allama Iqbal",
    "Muhammad Ali Jinah",
    "Waseem Badami"
];


for(let name of GuestList )
// loop for each to print invitation


{console.log(`Dear ${name}, you are invited to dinner please join us.`)

}