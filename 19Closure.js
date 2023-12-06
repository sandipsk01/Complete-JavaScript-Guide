// Closure retains access to the variable from its outer scope even after the outer function finished execution.
// Closure will remember lexical environment variables
let a="global";

function outerPrint(){
  let b="outer";
  return function innerPrint(){
    let c="inner";
    return `${a}->${b}->${c}`;
  }
}

const show=outerPrint();
console.log(show);
const printInner=show();
console.log(printInner);
