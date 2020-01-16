import { Component, OnInit } from '@angular/core';
import { CharacterService } from "./character.service";
import {Character} from "./character.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.characterService
      .getCharacters()
      .subscribe(characters => this.characters = characters)
  }

}
