import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Board, TaskColorPair, TaskColorPairs } from '../board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  @Input() board = {} as Board | null;
  @Output() boardEditModeSet = new EventEmitter<number>();
  @Output() boardDeleted = new EventEmitter<number>();
  boardDeletedPrompt: boolean = false;

  onBoardEditModeSet() {
    this.boardEditModeSet.emit();
  }
  onBoardDeletedPrompt() {
    this.boardDeletedPrompt = true;
  }
  handleBoardDeleted() {
    this.boardDeleted.emit(this.board!.id);
    this.boardDeletedPrompt = false;
  }
}
