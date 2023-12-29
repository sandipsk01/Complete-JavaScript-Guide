// Destructuring objects
const student={ name: "John", surname:"Doe", no:24};

const { name, surname } = student;   // Binding Pattern
const { name: firstname, surname: lastname, no:number } = student;

let num;
({no:num}=student);  // Assignment Pattern

// Destructuring Arrays
let fruits=["apple", "mango", "banana", "berry", "kiwi"];

const [a,m]=fruits;  // apple, mango
const [,m, ,be]=fruits //mango, berry - add ' ,' for skipping element
const [a,...[, , , k]]=fruits; //apple, kiwi - Nested Destructuring
