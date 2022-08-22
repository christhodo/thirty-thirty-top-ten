import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videogame } from '@top-ten/api-interfaces';
import {
  VIDEOGAME_ENVIRONMENT,
  VideogameEnvironment,
} from '@top-ten/environment';

const BASE_URL = 'https://thirty-by-thirty-app.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  model = 'videogames';

  constructor(
    private http: HttpClient,
    @Inject(VIDEOGAME_ENVIRONMENT) private environment: VideogameEnvironment
  ) {}

  all() {
    return this.http.get<Videogame[]>(this.getUrl());
  }

  find(id) {
    return this.http.get<Videogame>(this.getUrlWithID(id));
  }

  create(videogame) {
    return this.http.post<Videogame>(this.getUrl(), videogame);
  }

  update(videogame) {
    return this.http.put<Videogame>(this.getUrlWithID(videogame.id), videogame);
  }

  delete(id) {
    return this.http.delete<Videogame>(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
