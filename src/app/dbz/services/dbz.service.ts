import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";
import { Character } from "../interfaces/characters.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        nombre: 'Kriling',
        power: 1000
      }, {
        id: uuid(),
        nombre: 'Goku',
        power: 9500
      },
      {
        id: uuid(),
        nombre: 'Vegueta',
        power: 7500
      }];
    
      addCharacter(character: Character): void {

        const newCharacter: Character = {
          ...character,
            id: uuid()
        }

        this.characters.push(newCharacter);
      }
    
      // onDeleteCharacter(index: number): void {
    
      //   this.characters.splice(index, 1);
    
      // }

      deleteCharacterById( id: string) {
        this.characters = this.characters.filter( character => character.id !== id );


      }
    

    

}