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

// Filter Method
const nums=[2,3, -3,6,-8,4,7];
function nonNegatives(num){
  return num>0;
}

const positives=nums.filter(nonNegatives);
console.log(positives);

// Find and FindIndex, indexOf, lastIndexOf
let arr=[43,234,545,56,76];

const find=arr.find((num)=>num==56);
console.log(find)  //56 if not present undefined

const findIndex=arr.findIndex((num)=>num==56);
console.log(findIndex);  //3  if not present -1
