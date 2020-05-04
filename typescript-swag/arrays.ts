const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

const carsByMake2: string[][] = [];

// Inference when extracting values
const car = carMakers[0]; // Inferences as a string
const myCar = carMakers.pop(); // Inferences as a string

// Prevent incompatible values
// carMakers.push(100); // Can't add number to an array of string types

// Help with built in array methods (map, reduce, forEach, etc.)
carMakers.map((car: string): string => {
  return car;
});

// Flexible arrays can contain multiple types
const importantDates = [new Date(), "2030-10-10"];
