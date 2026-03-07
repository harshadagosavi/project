//10/12/2025
// persone class store with id =1 
// strore the same person with id =2
// store the same person with id =3
// store the same person with id =4
// store the same person with id =5
//12/12/2025
//how to read data from file 
//how to do object 
//bulb Component node file make app.js 
//usestate how to use //usestate return the array ,condition rendering
//anbrew youtber

const fs = require('fs');
class PersonClass {
    #name
    #id
    marks

   constructor(name) {
        this.#name = name
   }

   set name(name) {
        this.#name = name
   }

   get name() {
        return this.#name
   }

   get id() {
        return this.#id
   }

    // setName(name) {
    //     if (this.#name) {
    //         throw new Error('Name is already set')
    //     }
    //     if (typeof name !== 'string') {
    //         throw new Error('Only String allowed in name')
    //     }
    //     this.#name = name
    // }
    setMarks(marks) {
        if (typeof marks !== 'number') {
            throw new Error('Other than number is not allowed in the marks')
        }
        this.marks = marks
    }

    save() {
        let personList = []
        try {
            personList  =  JSON.parse(fs.readFileSync('person.json', 'utf8'))
        } catch (e) {
            console.log('Invalid Json')
        }

        personList.push({ name: this.#name, marks: this.marks, id: parseInt(Math.random() * 1000) })
        fs.writeFileSync('person.json', JSON.stringify(personList))
    }
}


const person = new PersonClass('Abc')
person.setMarks(456)
// fs.appendFileSync('person.json', JSON.stringify(person))
// console.log('person.marks', person.marks)
// console.log('person.name', person.name)
person.save()
person.setMarks(457)
person.save()
person.save()
person.save()


