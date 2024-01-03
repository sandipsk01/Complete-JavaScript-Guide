// When you want use the method as property.
// Getter: Get can not have any parameter.
// Setter: set should at least have single parameter.
class Circle{
  constructor(radius){
    this.radius=radius;
  };

  get diameter(){
    return this.radius*2;
  };

  set diameter(dia){
    this.radius=dia/2;
  };
  
};

const circle = new Circle(4);

console.log(circle.radius);
console.log(circle.diameter);

circle.diameter=10;
console.log(circle.radius);
console.log(circle.diameter);
