// Promise is an Object returned by an aynchronous operation, which represents the current state of operation. (pending, fullfilled, rejected)

//The Promise() constructor creates Promise objects. It is primarily used to wrap callback-based APIs that do not already support promises.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data');
  }, 1000);
});

promise1
.then((result) => console.log(result))      //to use resolve value use .then
.catch((error) => console.error("Failed to read data"));
