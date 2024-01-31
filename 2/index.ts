//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


// step number is store a person name in lowercase.

let personName: string = "Muhammad Talal"


let lowercaseName: string = personName.toLowerCase()


console.log(lowercaseName)


// step number 2 is to store a person name in uppercase.

let personName1: string = "Muhammad Talal"

let uppercaseName: string = personName1.toUpperCase()

console.log(uppercaseName)


// step number 3 is to store a person name in titlecase
let personame3 = "muhammad Talal khan"
let titleCase = (str:string)=> {
    let name1 = str.split(' ')
    let title = name1.map((item)=>(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())).join(' ')
    console.log(title)
}


titleCase(personame3)