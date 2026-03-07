//Promise reporesents a task that finish in the future resolve() , reject()
//callback function 

// function printmsg(callback){
//     console.log("hey Hello...")
// callback();
// }
// function done(){
//     console.log("Welcome to ...")
// }

// printmsg(done);

//==== callback hell===

// setTimeout(() =>
// {
//      console.log("Step:1");
//      setTimeout(() => {
//         console.log("Step: 2")
//         setTimeout(()=> {
//             console.log("Step: 3");
//              setTimeout(()=> {
//             console.log("Step: 4");
//         },1000
//         )
//         },1000
//         )
//      },1000
//      )
// },1000)

//=== File reading==
// const fs=require('fs');
// fs.readFile("array.js","utf8",(err,data)=> {
//     if(err){
//         console.log("Error Reading file:",err);
//         return;
//     }
//     console.log("File Content:",data);
// });

// ==== Promise Example

// let myPromise= new Promise((resolve,reject)=>{
//     let success= true;
//     if(success){
//         resolve("Promise resolve")
//     }
//     else{
//         reject("Promise Reject")
//     }
// });

// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// === callback convert to promise

// function addPromise(a, b){
//     return new Promise((resolve) => {
//         resolve(a + b);
//     })
// }
// addPromise(2, 3).then(result =>
//     console.log("The addition is:", result)
// );

//=== callback function example

// function getData(callback) {
//     setTimeout(() => {
//         callback("data received");
//     },1000)
// }
// getData((result)=> {
//     console.log(result);
// })

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("data received")
        },1000)
    })
}

getData().then((result) => {
    console.log(result)
});

//Promise.rest
//async / await function to handle promises
//export the function,object,array