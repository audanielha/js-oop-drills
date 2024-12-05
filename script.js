let person1 ={
    name: "Daniel",
    sayHello(){
        console.log(`Hello! My name is ${this.name}`);
    }
}

class Person{
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greeting(){
        return(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}

let one = new Person ("Daniel", "Auckland", 27)
let two = new Person ("Lee", "Auckland", 28)
let three = new Person ("Harry", "Auckland", 26)

console.log(one)
console.log(two)
console.log(three)