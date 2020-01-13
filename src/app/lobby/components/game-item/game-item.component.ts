import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() game:Game;
  @Output() playClicked = new EventEmitter<number>();
  @Output() practiceClicked = new EventEmitter<number>();
  @Output() gameItemClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
