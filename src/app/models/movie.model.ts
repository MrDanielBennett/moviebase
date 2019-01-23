export class Movie {
  public title: string = "";
  public year: number = 0;
  public genre: string = "";
  public director: string = "";
  public actors: string[] = [];
  public plot: string = "";
  public averageRating: number = 0;

  constructor(parameters) {
    this.title = parameters.title;
    this.year = parameters.year;
    this.genre = parameters.genre;
    this.director = parameters.director;
    this.actors = parameters.actors;
    this.plot = parameters.plot;
    this.averageRating = parameters.averageRating;
  }
}
