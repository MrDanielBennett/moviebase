import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = [
    {title: "Jurassic Park", year: 1993},
    {title: "Iron Man 2", year: 2010}

  ]
}
