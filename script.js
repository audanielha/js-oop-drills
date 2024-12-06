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


class Vehicle{
    constructor(type,manufacturer,wheels){
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;   
    }

    aboutVehicle(){
        console.log(`This vehicle is a ${this.type}, manufactured from ${this.manufacturer} and it has ${this.wheels} wheels`)
    }
}

class Trucks extends Vehicle {
    constructor(type, manufacturer, wheels, doors, bed) {
        super(type, manufacturer, wheels);
        this.doors = doors;
        this.bed = bed;
    }
    
    aboutVehicle() {
        console.log(`This truck is a ${this.type}, manufactured by ${this.manufacturer}. It has ${this.doors} doors, ${this.wheels} wheels, and a ${this.bed} bed.`)
    }
}
class Sedan extends Vehicle{
    constructor(type,manufacturer, wheels, mpg, size){
        super(type, manufacturer, wheels);
        this.mpg = mpg;
        this.size = size;
    }
    aboutVehicle() {
        console.log(`This truck is a ${this.mpg}, manufactured by ${this.size}. It has ${this.wheels} doors, ${this.type} wheels, and a ${this.manufacturer} bed.`)
    }
} 
class Motorcylces extends Vehicle{
    constructor(hasHandleBars, hasDoors){
        super(wheels, doors, bed)
        this.hasHandleBars = hasHandleBars;
        this.hasDoors = hasDoors;
    }
}

let vehicleOne = new Vehicle("Sedan", "Honda", 4);

let truckOne = new Trucks("car type", "careManufact", 5);

let sedanTwo = new Sedan("One", "Two", "Three", "Four", "Five") 

truckOne.aboutVehicle()
sedanTwo.aboutVehicle()