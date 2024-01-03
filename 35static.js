// Static methods or properties will not be attached to instances. It can only be invoked by class.
// Static methods in a class can only access other static methods & properties within the same class.
// Subclass inherit both static and non-static properties & can utilize them in their own implementation.
// Static methods can not be overridden in subclass.

class MyClass{
  static myStaticProperty="static property";
  static myStaticMethod(){
    console.log(`${MyClass.myStaticProperty} using class`);
    console.log(`${this.myStaticProperty} using using this in static method`);
  }

  nonStaticMethod(){
    console.log(`${MyClass.myStaticProperty} using class`);
    console.log(`${this.constructor.myStaticProperty} using using this in non static method`);
  }
}

const class1=new MyClass();

MyClass.myStaticMethod();

class1.nonStaticMethod();
