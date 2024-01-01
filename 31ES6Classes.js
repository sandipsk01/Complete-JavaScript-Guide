// Classes are just a syntactical sugar for constructor function.
// Class can be hoisted
 // class ClassName{
      // Properties (optional)
      // Constructor (only when values needs to be initiated)
      // Methods
// }

// Class declaration
class Student{
  name;
 constructor(name) {
  this.name=name;
 };
 getDetails() {
  console.log(`Student name is ${this.name}.`);
 }
}
const student1=new Student("John");
student1.getDetails();
