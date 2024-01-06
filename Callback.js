// When you want to perform asynchronous operation synchronously then use callback/ promise/ async await
function greet(callback){
  setTimeout(()=>{
    console.log("Hello, ");
    callback();
  }, 1000);
};

function message(){
  console.log("how are you?");
}

greet(message);
console.log(1);

//XMLHttpRequest : It is object that allows us to interact with server without refreshing page.
const request = new XMLHttpRequest();
request.open('GET','https://dummyjson.com/users/1');  //open req
// request.responseType="text";
request.send();  //send req
request.addEventListener('load', function(){
  console.log(JSON.parse(request.responseText));
});

// Callback hell: When there is callback of async operation inside another async operation
