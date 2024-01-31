// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure
// all the information was stored correctly.

interface Car {
    manufacturer_name: string;
    model_name: string;
    color?: string; 
}
let car = (manufacturer: string, model: string, color?: string) => {
    let cars: Car = {
        manufacturer_name: manufacturer,
        model_name: model,
    };

    if (color !== undefined) {
        cars.color = color;
    }

    return cars;
};


let myCar = car("Toyota", "Camry");
console.log(car("Toyota", "Camry", "blue"))
console.log(myCar);