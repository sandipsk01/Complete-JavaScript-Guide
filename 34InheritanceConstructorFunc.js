function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}
Vehicle.prototype.getVehDetails = function () {
  console.log(
    `Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`
  );
};

function Car(color, brand, seats) {
  Vehicle.call(this, 'car', color, 4);    // Bind the properties of other constructor function using .call() 
  this.brand = brand;
  this.seats = seats;
}

Car.prototype = Object.create(Vehicle.prototype);     // To use methods of other constructor function, assign prototype of that to current constructor function's prototype using Object.create()

Car.prototype.getDetails = function () {
  console.log(`
      The ${this.color} ${this.name} is of ${this.brand} company.
      It has seating for ${this.seats} people`);
};

const car1 = new Car('Black', 'Audi', 5);
car1.getDetails();
console.log(car1);
console.log(car1.__proto__);
car1.getVehDetails();
