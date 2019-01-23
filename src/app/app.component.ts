import { Component } from '@angular/core';
import { Movie } from './models/movie.model'
import { Search } from './models/search.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMovies: Movie[] = [];

  searchForMovies(params) {
    let promise = Search.searchMovies(params);
    promise.then((data) => {
      console.log("search data", data);
      this.masterMovies = [];
      data.results.forEach((movieData) => {
        let movie = new Movie({title: movieData.original_title, year: movieData.release_date});
        this.masterMovies.push(movie);
      })
    });
  }
  // this.title = parameters.title;
  // this.year = parameters.year;
  // this.genre = parameters.genre;
  // this.director = parameters.director;
  // this.actors = parameters.actors;
  // this.plot = parameters.plot;
  // this.averageRating = parameters.averageRating;
}
