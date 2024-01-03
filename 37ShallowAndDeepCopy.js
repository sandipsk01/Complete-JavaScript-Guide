const obj1={
  name:"John",
  age:12,
  marks:{
    maths:34,
    english:80
  }
}

//Shallow copy: Copying first layer elements and reference of underlying elements
const obj2={...obj1};
// const obj2=Object.assign({},obj1);
// const obj2=obj1.slice();
obj2.name="Doe";   // Will not effect obj1: First layer can not change bcoz of shallow copy
obj2.marks.maths=70;  // Will effect obj1: shallow copy doesn't work on Inner layer 
console.log(obj1);
console.log(obj2);

//Deep Copy: Copying all elements, including underlying elements
const obj3=JSON.parse(JSON.stringify(obj1));
obj3.name="Sandy";
obj3.marks.maths=90;
console.log(obj1);
console.log(obj3);
//Note: JSON will not work on Methods
