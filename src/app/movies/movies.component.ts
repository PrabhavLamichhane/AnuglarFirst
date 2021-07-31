import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../services/backend-service.service';
import { Movie, MovieResponse } from '../models/person';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: MovieResponse[] = [];
  term: string;
  constructor(private backendService: BackendServiceService) { }

  ngOnInit(): void {

  }

  searchMovies() {
    this.backendService.getMovies(this.term.toLowerCase()).subscribe(
      m => this.movies = m.Search
    );
  }

}
