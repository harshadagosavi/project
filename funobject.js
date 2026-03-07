//const person={
 //   Name:"Alice",
   // age: 24,
   // age:undefined,
   // course:"BCA",
   // CGPA: 8.9
    
//}
//console.log("person details=====",person)

//===using new keyword  object create 
//const john = new person('John', 30);
//console.log("john =====",john)


const person = {
      firstName: "Jane",
      lastName: "Smith",
      fullName() { // Concise method syntax
        return this.firstName + " " + this.lastName;
      }
    };

console.log(person.fullName()); // calling method


// key value constructor method 
const car = { make: "Toyota", model: "Camry" };
console.log(Object.keys(car));   
console.log(Object.values(car)); 


// delete method
const person1 = {
  name: 'John Doe',
  age: 30,
  profession: 'Developer'
};

delete person1.age; 
console.log(person1);

