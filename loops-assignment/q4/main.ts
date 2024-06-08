// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using
// a for...in loop.
// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3,
// each with corresponding string values.

// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the
// console.


type MyObject = {
    item1:string,
    item2:string,
    item3:string
}

const myObject:MyObject  = {
    item1:"value of item1",
    item2:"value of item2",
    item3:"value of item3"
};
for (let property in myObject) {
    console.log(`Property: ${property}, value: ${myObject.item1}`);
}