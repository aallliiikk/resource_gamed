import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-level-display',
  templateUrl: './level-display.component.html',
  styleUrls: ['./level-display.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LevelDisplayComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  getLevelProgress(): number {
    const currentExp = this.dataService.experience;
    const currentLevel = this.dataService.level;
    const expForCurrentLevel = this.dataService.getExperienceForLevel(currentLevel);
    const expForNextLevel = this.dataService.getExperienceForLevel(currentLevel + 1);

    const expInCurrentLevel = currentExp - expForCurrentLevel;
    const expRequiredForNextLevel = expForNextLevel - expForCurrentLevel;

    return (expInCurrentLevel / expRequiredForNextLevel) * 100;
  }
}

