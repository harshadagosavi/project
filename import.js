//=== function import here
import {add } from './exportfun.js';

console.log(add(1,2));


//=== array import here
import { fruits } from './exportfun.js';

console.log(fruits[2]); 

//=== object import here
import { person } from './exportfun.js';

console.log(person.name);

//== array module import here
import { cars } from './exportfun.js';

console.log(cars[0]);

//== object module import here
import { person1 } from './exportfun.js';

console.log(person1.name);

//=======default import here
import greet from './exportfun.js';
greet();
