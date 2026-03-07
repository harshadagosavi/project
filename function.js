function person(name,age) {
    return person.name , age
}
console.log("Hello world",23)


//=== Arrow function 
const square = x => x*x
console.log("x square:",square(7))

//== this function if the browser show browser object , if node js then show global object 

function thisfunction(){
    console.log(this)
}
thisfunction()

