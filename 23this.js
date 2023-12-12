// this  : points to the bounded object. And depends on how and where function call happened.
'use strict';
console.log(this);   //window

function checkThis() {
  console.log(this);
}

checkThis();    //undefined

const checkArrow = () => {
  console.log(this);
};

checkArrow();   //window   //arrow function will take this of parent scope

// const user1 = {
//   userName: 'John',
//   userAge: 12,

//   work: function () {
//     console.log(this);    
//   },
// };

// user1.work();  //this=user1

// const user2 = {
//   userName: 'Harry',
// };

// user2.work = user1.work;

// //console.log(user2);

// user2.work();    //this= user2
