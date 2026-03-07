//===push method//
let fruit=['Banana','Apple','Orange']
fruit.push("watermelon")
console.log("push method using ====",fruit)

//== filter method

let ages = [12, 18, 25, 7, 30];
let filters = ages.filter(function(age) {
    return age >= 18;
});
console.log(filters);


//=== mutable ,immutable method ====

const person={
    name:"Alice Bob"
}
// const newperson={...person}
const newperson=person
newperson.name="Bob"
console.log("New Person",person)


//== reduce method
const numbers = [1, 2, 3, 4, 5];
const sumReducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
};
const sum = numbers.reduce(sumReducer, 0);

console.log(sum); 