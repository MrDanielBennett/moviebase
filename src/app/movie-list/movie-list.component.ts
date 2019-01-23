import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  movies = [
    {title: "Jurassic Park", year: 1993},
    {title: "Iron Man 2", year: 2010}

  ]
}
