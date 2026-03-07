//=====sum of positive numbers=====

// function sumofpositive(array){
//     let sum = 0
//     for(let i=0;i<=array.length;i++){
//         if(array[i] > 0)
//             sum += array[i];
//     }
//     return sum;
// }
// const input1 = [-2, 5, 3, -8, 10, -4, 7];
// const total= sumofpositive(input1);
// console.log("sum of positive numbers:",total)


// Question 2 
// Given an array of strings, create a new array with each string's length

// const arr = ["Hello", "world", "python", "java"];

// const length = arr.map(str => str.length);

// console.log(length);


// Question 3 
// Given an array of numbers, find all numbers that are multiples of 3
// filter method used for modules(%)
//const input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//const result=input3.filter(input3 => input3 % 3===0)
//console.log("multiples by 3 :",result)


// Question 4 (Updated) 
// Given an array of numbers representing daily steps, find all days where the person exceeded their 
//daily goal of 10000 steps

// const steps = [8547, 12345, 9856, 11254, 7856, 10999, 7856];

// const result=steps
// .map((value,index)=>{
//     return value >10000 ? { day:index+1,steps:value}:null;
// })
// .filter(item => item !== null);
// console.log(result);


//que 5 
//Given an array of objects representing products, find all products under $50 
//  const input5 = [ 
// { name: 'Book', price: 20 }, 
// { name: 'Pen', price: 5 }, 
// { name: 'Laptop', price: 800 }, 
// { name: 'Notebook', price: 15 }, 
// ]; 
//const pro=input5.filter(product => product.price <50)
//console.log(pro)


//=====Que 6
// Given an array of objects representing students, calculate the average age of students for each grade 
// const input6 = [ 
// { name: 'John', age: 15, grade: '10th' }, 
// { name: 'Jane', age: 16, grade: '10th' }, 
// { name: 'Tom', age: 15, grade: '9th' }, 
// { name: 'Mary', age: 14, grade: '9th' }, 
// { name: 'Bob', age: 16, grade: '11th' }, 
// ];
// const result={};

// input6.forEach(student => {
//     if (!result[student.grade]) {
//         result[student.grade] = { totalAge:0, count: 0  };
//     }
//     result[student.grade].totalAge += student.age;
//     result[student.grade].count++;
// });

// for(let grade in result) {
//     result[grade]=
//     (result[grade].totalAge / result[grade].count).toFixed(2);
// }
// console.log(result)

//===que 7
// Given an array of numbers, find the length of the longest sequence of consecutive increasing numbers

//  const input7 = [1, 2, 3, 1, 2, 3, 4, 2, 3, 4, 5];

//  let maxLen = 1;
//  let currentLen = 1;

//  for(let i=1; i<input7.length; i++)
//  {
//      if(input7[i] > input7[i-1]){
//          currentLen++;
//      }else {
//          currentLen = 1;
//      }
//      if(currentLen>maxLen) {
//          maxLen=currentLen;
//      }
//  }
// console.log("Longest increasing sequence length:",maxLen);

// ======Question 8 (Updated) =====
// Given an array of movie ratings from different critics, find movies that are universally well-rated 
// (all ratings above 7) and return their names sorted by average rating 
const input8 = [ 
{ name: 'Movie A', ratings: [8, 7.5, 9, 7.8] }, 
{ name: 'Movie B', ratings: [6, 7.5, 8.5, 7.7] }, 
{ name: 'Movie C', ratings: [8.2, 8, 8.5, 9] }, 
{ name: 'Movie D', ratings: [7.5, 7.8, 7.2, 8] }, 
];
