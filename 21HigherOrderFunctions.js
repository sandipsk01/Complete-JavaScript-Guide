//Higher Order functions are the functions which accepts the function as an argument or returns the function
function operation(input,func){
  const output=[];
  for(let num of input){
    output.push(func(num));
  }
  return output;
}

function square(num){
  return num*num;
}

function cube(num){
  return num*num*num;
}

let arr=[1,2,3,4,5,6];
console.log(operation(arr,square));
