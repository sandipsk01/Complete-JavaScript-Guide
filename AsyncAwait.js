// await is functionality which help us async promise based operation. It waits to complete async operation
// add async before function where you are using await. it return promise implicitly.
async function getData(){
  try{
    const response= await fetch("https://dummyjson.com/users/1");
    const data= await response.json();
    console.log(data);
  }catch(err){
    console.log("err")
  }
};
getData();
