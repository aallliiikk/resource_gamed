import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-mines',
  templateUrl: './mines.component.html',
  styleUrls: ['./mines.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class MinesComponent {

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    // Add any initialization code here, if needed
  }

  mines = [
  { name: 'Mine 1', value: 10, requiredLevel: 1, progress: 0, miningTime: 2000, mining: false, experience: 5 },
  { name: 'Mine 2', value: 20, requiredLevel: 2, progress: 0, miningTime: 2000, mining: false, experience: 10 },
  { name: 'Mine 3', value: 30, requiredLevel: 3, progress: 0, miningTime: 2000, mining: false, experience: 15 },
  { name: 'Mine 4', value: 40, requiredLevel: 4, progress: 0, miningTime: 2000, mining: false, experience: 20 },
  { name: 'Mine 5', value: 50, requiredLevel: 5, progress: 0, miningTime: 2000, mining: false, experience: 25 },
];



startMining(mine: any): void {
  if (this.dataService.level >= mine.requiredLevel) {
    mine.mining = !mine.mining;

    while (mine.mining) {
      setTimeout(() => {
        // mine.mining = false;
        // mine.progress = 100;
        this.dataService.inventory[mine.name as keyof typeof this.dataService.inventory] += 1;
        this.gainExperience(mine.experience);
      }, mine.miningTime);
    }
  }
}

gainExperience(exp: number): void {
  this.dataService.experience += exp;
  this.dataService.level = Math.floor(this.dataService.experience / 100) + 1;
}


  miningProgress(mine: any): number {
    return mine.progress;
  }
}

