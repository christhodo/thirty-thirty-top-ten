import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Videogame } from '@top-ten/api-interfaces';

@Component({
  selector: 'top-ten-app-videogames-list',
  templateUrl: './videogames-list.component.html',
  styleUrls: ['./videogames-list.component.scss'],
})
export class VideogamesListComponent {
  @Input() videogames: Videogame[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
