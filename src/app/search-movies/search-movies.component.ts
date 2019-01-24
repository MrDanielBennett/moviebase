import { Component, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model'

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {
  @Output() sendSearch = new EventEmitter();

  searchMovies(title: string, year: number){
    let movieSearch = {title: title, year: year};
    this.sendSearch.emit(movieSearch);
  }
}
