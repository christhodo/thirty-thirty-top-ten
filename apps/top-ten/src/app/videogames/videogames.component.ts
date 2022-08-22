import { Component, OnInit } from '@angular/core';
import { emptyVideogame, Videogame } from '@top-ten/api-interfaces';
import { VideogamesService } from '../common/models/services/videogames.service';

@Component({
  selector: 'top-ten-app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss'],
})
export class VideogamesComponent implements OnInit {
  videogames = [];
  videogames$: any;
  selectedVideogame = emptyVideogame;
  originalTitle = '';

  constructor(private videogamesService: VideogamesService) {}

  ngOnInit(): void {
    this.fetchVideogames();
  }

  selectVideogame(videogame: Videogame) {
    this.selectedVideogame = videogame;
  }

  fetchVideogames() {
    this.videogames$ = this.videogamesService.all();
  }

  saveVideogame(videogame: Videogame) {
    if (videogame.id) {
      this.updateVideogame(videogame);
    } else {
      this.createVideogame(videogame);
    }
  }

  createVideogame(videogame: Videogame) {
    this.videogamesService
      .create(videogame)
      .subscribe((result) => this.fetchVideogames());
  }

  updateVideogame(videogame: Videogame) {
    this.videogamesService
      .update(videogame)
      .subscribe((result) => this.fetchVideogames());
  }

  deleteVideogame(videogameId) {
    console.log('DELETE Videogame', videogameId);
  }

  reset() {
    this.selectVideogame({ ...emptyVideogame });
  }
}
