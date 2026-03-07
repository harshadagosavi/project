// function exported here.....
export function add(a,b){
    return a+b;
}
export function sub(a,b){
    return a-b;
}
export function mul(a,b){
    return a*b;
}
export function div(a,b){
    return a/b;
}


//export default function add(a,b){return a+b;}
//export default function sub(a,b){return a-b;}
//export default function mul(a,b){return a*b;}
//export default function div(a,b){return a/b;)

//===array export....

export const fruits = ["apple", "banana", "mango"];

//== object export
export const person = {
    name: "John",
    age: 30,
    city: "New York"
};

//=== array module export
export const numbers = [1, 2, 3, 4, 5];

//=== object module export
export const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

//==function module export
export function greet(name) {
    return `Hello, ${name}!`;
}


// export default 
export default function greet(){
    console.log("hello world");
}