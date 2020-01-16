import { Injectable } from '@angular/core';
import { environment, API_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {Character} from "./character.model";
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  public getCharacters( ): Observable <Character[]> {
    return this.httpClient
      .get<any>(API_URL + '/api/character/graphql/')
      .pipe(
        map(data =>
          data
            .characters
            .results
            .map(data => new Character().deserialize(data)))
      );
  }
}

