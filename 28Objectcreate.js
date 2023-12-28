// Object.create(): Way to link the object to any prototype

const car={
  getDetails(name){
    console.log(`Your car is ${name}`);
  },
};

const car1=Object.create(car);
console.log(car1);   //{} prototype Object with getDetails method
car1.getDetails("Audi");
