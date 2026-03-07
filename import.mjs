
import mainFunc, { age, info } from "./export.mjs";

mainFunc();
console.log(age);
info();


import { name, sayHello } from "./export.mjs";

console.log(name);
sayHello();
