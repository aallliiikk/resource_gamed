import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
  }
}

