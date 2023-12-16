// Object Literal : Object creation method
// With assignment operator object create shallow copy
const movie = {
  title: 'The Avengers',
  year: 2012,
  genre: 'Action, Sci-Fi, Thriller',
  cast: {
    main_lead: 'Robert Downey Jr.',
    others: 'Chris Evans',
  },

  getDetails() {
    console.log(`
      Title: ${this.title}
      Year: ${this.year}
      Genre: ${this.genre}
      Cast: ${this.cast}
      `);
  },

  getMovieDetails: function (detail) {
    console.log(movie[detail]);   // bracket notation : when we use variable
  }
};

console.log(movie.title);     // dot notation
movie.getDetails();
const detail = 'year';

movie.getMovieDetails(detail);

console.log(movie.cast.main_lead);


