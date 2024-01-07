// Promise is an Object returned by an asynchronous operation, which represents the current state of operation. (pending, fullfilled, rejected)

//The Promise() constructor creates Promise objects. It is primarily used to wrap callback-based APIs that do not already support promises.
// throw new Error("dsdsadad");
// Chaining Promise: If promise inside promise return it and add .then method after .then of first promise and at last add catch which will capture error for all.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promise1
.then((result) => console.log(result))      //to use resolve value use .then
.catch((error) => console.error("Failed to read data"))    //When error occured
.finally(()=>console.log("Request Completed"));   // Execute at last regardles failure of success

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 500);
});

Promise.all([promise1, promise2])    // though promise2 completes first it waits for promise1 and then only .then executes
  .then((results)=>console.log(results));   //[1,2]

Promise.race([promise1, promise2])    // resolves with first completed promise
  .then((results)=>console.log(results));   // 2 1


// fetch and json also returns promise
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

// PUT request
fetch('https://api.example.com/data', {method: PUT} )
