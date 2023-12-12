//Currying: It is a technique to convert a function with multiple args into a sequence of functions, each taking single arg. to use function more dynamically
function power(a){
  return function(b){
    return b**a;
  }
}

let square=power(2);
console.log(square(3));

let cube=power(3);
console.log(cube(3));
