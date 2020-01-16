import { Component, OnInit } from '@angular/core';
import { CharacterService } from "./character.service";
import {Character} from "./character.model";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public characters: Character[];

  constructor(private characterService: CharacterService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.spinner.show();
    this.characterService
      .getCharacters()
      .subscribe((characters) => {
          setTimeout(()=>{
            this.characters = characters
            this.spinner.hide();
            /// error
          }, 1000);
      }, (error => {
        setTimeout(()=>{
          this.spinner.hide();
          /// error
        }, 1000);
      }));
  }

}
