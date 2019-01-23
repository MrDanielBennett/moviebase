import { Component } from '@angular/core';
import { Movie } from './models/movie.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMovies: Movie[] = [
    new Movie({title: "Jurassic Park", year: 1993}),
    new Movie({title: "Iron Man 2", year: 2010})
  ]

  searchForMovies(params) {
    console.log("params", params);

  }
  // this.title = parameters.title;
  // this.year = parameters.year;
  // this.genre = parameters.genre;
  // this.director = parameters.director;
  // this.actors = parameters.actors;
  // this.plot = parameters.plot;
  // this.averageRating = parameters.averageRating;
}
