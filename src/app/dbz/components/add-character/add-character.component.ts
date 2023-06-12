import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styles: [
  ]
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    nombre: '',
    power: 0
  };
  
  emitCharacter() {

    if ( this.character.nombre.trim().length === 0) {
      return;
    }

    this.onNewCharacter.emit( this.character );

    this.character = {
      nombre: '',
      power: 0
    };

    
  }


}
