// Create Element
const btn = document.createElement('button');
btn.textContent = 'Click here';
btn.className = 'btn1';

// Adding an Element using Backticks:
var element = `<div class="${className}">${content}</div>`;

//Append Element
const division = document.querySelector('div');
division.appendChild(btn);   //`appendChild()` is a method used to append a single element as a child to another element. 
//`append()`, on the other hand, is a more versatile method that allows you to append multiple elements or text to another element.

btn.innerHTML="<div>Changed the whole elemet</div>";

// Removing Element
document.querySelector('h2').remove()
