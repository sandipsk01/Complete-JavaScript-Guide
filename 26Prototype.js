// Prototype is a reference to another object that is used for property and method inheritance.
// Each object has build-in property prototype, except for the base object
// Top most prototype of all object is "Object"
// To get prototype use .__proto__
function Movie(title){
  this.title=title;
}

const movie1=new Movie("Avengers");
movie1.year=2012;
console.log(movie1);  //title,year
console.log(movie1.__proto__)   // {constructor :f()}  constructor:f Movie(title) // To get prototype use .__proto__
console.log(movie1.__proto__.__proto__)  //  {constructor :f(), __defineGetters__: f, etc}    constructor:f Object()   // Top most prototype of all object is "Object"
console.log(movie1.__proto__.__proto__.__proto__) // null

const movie2=new Movie("End Game")
console.log(movie2);


//Object Literal
const car={ name: "BMW",};
// Standard prototype checking method
Object.getPrototypeOf(car);

// Array prototype
let arr=[1,2,3,5,6];
console.log(arr.__proto__);   //constructor: f Array()
console.log(arr.__proto__.__proto__);   //constructor: f Object()
