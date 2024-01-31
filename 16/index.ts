// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of 
// your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest 
// to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let guest = ["Owais", "Muneeb", "Farhan", "Fahad"];
guest.splice(1,1, "Faizan")


for(let names of guest){

    console.log(`Hey ${names}, would you like to have dinner with me? Dont worry i'll pay`)
}



console.log(`Muneeb can't make it i'll just invite Faizan instead`)
console.log("_".repeat(100))
console.log("Hey Guys, i think we have more space here then what we expected let's invite more of our friends")

guest.unshift("Sahil")
guest.splice(2,0, "Sohail")
guest.push("Nouman")

for(let i = 0; i < guest.length; i++){
    console.log(`Hey ${guest[i]}, let's have a dinner tonight`)}