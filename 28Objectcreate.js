// Object.create(): Way to link the object to any prototype

const car={
  getDetails(name){
    console.log(`Your car is ${name}`);
  },
};

const car1=Object.create(car);
console.log(car1);   //{} prototype Object with getDetails method
car1.getDetails("Audi");


// Object.freeze() static method freezes an object
// Object.freeze(obj)

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)
