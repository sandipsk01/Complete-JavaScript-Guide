// Inheritance in Class: Child class can inherit properties and method of parent class. 
// private members are not inherited in subclass
class Vehicle {
  //constructor
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  //methods
  getDetails() {
    console.log(`
      The ${this.name} is ${this.color} in color.
      It has ${this.wheels} wheels.
      `);
  }
}

class Car extends Vehicle {       // Inherit using extends
  constructor(color, brand, purpose) {
    super('car', color, 4);        // call super for parent constructor
    this.brand = brand;
    this.purpose = purpose;
  }
  getDetails() {     // method overridden
    console.log(`
      The ${this.name} is ${this.color} in color of ${this.brand} company.
      It is for the ${this.purpose}
      `);
  }
}

const car1 = new Car(
  'Red',
  'Audi',
  'Luxury Travelling'
);

car1.getDetails();
console.log(car1.__proto__);
