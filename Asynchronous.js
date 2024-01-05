// Fetch(), setTimeout(), setInterval(), etc
for(var i=0; i<5; i++){
  setTimeout(()=>{console.log(i)},1000);   // 5,5,5,5,5 var has global scope, all the callback shares same referance.
};

for(let i=0; i<5; i++){
  setTimeout(()=>{console.log(i)},1000);    // 0,1,2,3,4 let new block scope created for each iteration, each cb captures its own lexical scope. Preserving the value of i.
}

let i=1;
const timer=setInterval(()=>{
  console.log(i);
  if(i==5){
    clearInterval(timer);    // clearInterval is necessary to stop iteration.
  };
  i++;
},1000);
