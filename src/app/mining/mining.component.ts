import { Component } from '@angular/core';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent {
  handleMineClick(minedResource: string) {
    console.log(`Resource mined: ${minedResource}`);
  }
}
