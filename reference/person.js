console.log(__dirname, __filename); // be aware that this is available

class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    greating(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;