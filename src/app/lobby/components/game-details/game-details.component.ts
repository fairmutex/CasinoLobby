import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent {

  @Input() game: Game;
  @Output() backClicked = new EventEmitter<void>();

}
