//================array of array====================

let matrix=[
    [1,2,3,4],
    [5,6,7],
    [7,8,9]
]
//console.log("matrix array of array:",matrix)

const students = [
  ["Name", "Age", "Grade"],
  ["Alice", 10, 5],
  ["Bob", 11, 6],
  ["Charlie", 9, 4]
]

//console.log("array of array:",students)


// ==================javascript object person convert into json========================

const person = {
  name: "Alice",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "Swimming"]
};

//console.log("stringy this js object:",JSON.stringify(person))
//  const jsonString=JSON.stringify(person)
//  console.log(jsonString);
//console.log("typeof",typeof(jsonString))


// ================using parse , json,stringfy method ================

// const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';
// const javascriptObject = JSON.parse(jsonString);
// console.log(javascriptObject.name)
// console.log(javascriptObject)

// ==================how to access shallow  ,deep copy example do. java script=========================
// shallow copy do not make new object but deep copy make new original all objects
//===Shallow copy example====//
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
};
console.log("employee details=>",employee)
let newEmployee = { ...employee };     // ===== rest method use====
console.log("New Employee=> ", newEmployee);
console.log("---------After modification----------");//=== changes
newEmployee.ename = "Harshada";
newEmployee.eid="E101";
newEmployee.eaddress="INDIA";
newEmployee.salary=100000;
console.log("Employee=> ", employee);        
console.log("New Employee=> ", newEmployee);

//==== deep copy====


// recursion concept clear it
