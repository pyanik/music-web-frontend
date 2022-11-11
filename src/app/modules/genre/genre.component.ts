import { Component, OnInit } from '@angular/core';
import { GenreService } from './genre.service';
import { Genre } from './model/genre';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  genres: Genre[] = [];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.genreService.getGenres()
    .subscribe(genres => this.genres = genres);
  }

}
