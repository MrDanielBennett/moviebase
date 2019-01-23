import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
