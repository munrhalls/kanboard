import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Board } from 'src/app/board.model';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css'],
})
export class BoardEditComponent {
  @Input() board = {} as Board | null;
  @Output() boardDisplayModeSet = new EventEmitter();
  @Output() boardUpdated = new EventEmitter<Board>();

  handleBoardDisplayModeSet() {
    this.boardDisplayModeSet.emit();
  }
  handleBoardUpdated() {
    this.boardUpdated.emit(this.board!);
    console.log('boardUpdated');
  }
}
