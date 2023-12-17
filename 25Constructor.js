// Constructor functions can be defined either by using a function declaration or expression with parameters and setting properties using this or by returning a new object from a function expression

//Can not use arrow function to create constructor, because they do not have their own 'this' as they are lexically bind this to enclosing scope.
function movie(title, year) {
  const movieObj = {
    title: title,
    year: year,
    getDetails() {
      console.log(`
                  Title: ${this.title}
                  Year: ${this.year}
                  `);
    },
  };
  return movieObj;
}

const movie1 = movie('The Avengers', 2012);
console.log(movie1);
movie1.getDetails();

//Constructor Function

function Movie(title, year) {
  this.title = title;
  this.year = year;

  this.getDetails = function () {
    console.log(`
                  Title: ${this.title}
                  Year: ${this.year}
                  `);
  };
}

//new keyword

const movie2 = new Movie('Avatar', 2013);
console.log(movie2);
movie2.getDetails();
