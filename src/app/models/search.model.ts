import { environment } from "../../environments/environment";

export class Search {
  static searchMovies(params) {
    let yearParams = "";
    let titleParams = "";
    if(params.year) {
      yearParams = `primary_release_year=${params.year}&`;
    }
    if(params.title) {
      titleParams = ``;
    }
    const url = `https://api.themoviedb.org/3/discover/movie?${yearParams}${titleParams}sort_by=popularity.desc&api_key=${environment["THE_MOVIE_DB_KEY"]}`;
    return fetch(url).then(function(response) {
      return response.json();
    });
  }
}
