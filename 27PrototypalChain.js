// prototype is property
//__proto__ will return prototype of object
function Movie(title){
  this.title=title;
  //// On every object creation, the same getTitle function will get copied, resulting in slow performance.
  // this.getTitle=function(){
  //   console.log(`Titel: ${this.title}`);
  // }
}

// Instead do this, it will not get copied but can be used with any object because it is present in prototype of movie1
Movie.prototype.getTitle=function(){
  console.log(`Titel: ${this.title}`);
}

const movie1=new Movie("Iron Man");
console.log(movie1) // title
movie1.getTitle();

const movie2=new Movie("Thor");

