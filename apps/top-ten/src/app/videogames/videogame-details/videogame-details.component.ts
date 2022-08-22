import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Videogame } from '@top-ten/api-interfaces';

@Component({
  selector: 'top-ten-app-videogame-details',
  templateUrl: './videogame-details.component.html',
  styleUrls: ['./videogame-details.component.scss'],
})
export class VideogameDetailsComponent {
  currentVideogame: Videogame;
  originalTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set videogame(value) {
    if (!value) return;
    this.currentVideogame = { ...value };
    this.originalTitle = this.currentVideogame.title;
  }
}
