import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  level: number = 1;
  experience: number = 0;
  coins: number = 0;
  inventory: Record<string, number> = {
    'Mine 1': 0,
    'Mine 2': 0,
    'Mine 3': 0,
    'Mine 4': 0,
    'Mine 5': 0,
  };

  constructor() {}

  // Add any methods to update the inventory, level, or coins here
  getExperienceForLevel(level: number): number {
    // Example formula: experience = level^2 * 100
    return Math.pow(level, 2) * 100;
  }
  getMaterialList(): string[] {
  return Object.keys(this.inventory);
}
}

