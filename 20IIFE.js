//Immediately Invoked Function Expression
(function(){
  console.log("IIFE");
})();


// Allows to create private and public variables and functions
const user = (function(){
  const userData={
    userName:"John",
    userAge:20,
  };

  function getName(){
    console.log(userData.userName);
  }

  return {getName:getName};
})();

console.log(user);
user.getName();
