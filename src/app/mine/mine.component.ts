import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent {
  @Output() onMineClicked: EventEmitter<string> = new EventEmitter<string>();

  mineResource() {
    const minedResource = 'Gold';
    this.onMineClicked.emit(minedResource);
  }
}
