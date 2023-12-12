//Map Method: Does not modifies original array. Returns new array arr.map(cbFunc)
let fruit=["banana", "mango", "apple"];

let maparray=fruit.map((item,index)=>{
  return {[index]:item.length};
})

console.log(maparray);

// Reduce Method: arr.reduce(cbfunction, initialVal);  if initialVal not provided index=1 and initialVAl=currentVal
// cbfunction(accumulator, currentVal, currentIndex);

let inputs=[1,2,3,4,5,6];

let sum=inputs.reduce((total, num)=>{
  return total+num;
},0);

console.log(sum);
