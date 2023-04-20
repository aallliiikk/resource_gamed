import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-floating-number',
  templateUrl: './floating-number.component.html',
  styleUrls: ['./floating-number.component.css'],
  animations: [
    trigger('float', [
      state('initial', style({ opacity: 1, transform: 'translateY(0)' })),
      state('final', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition('initial <=> final', animate('1000ms ease-out'))
    ])
  ]
})
export class FloatingNumberComponent implements OnInit {
  @Input() number: number;
  animationState: string;

  constructor() {
    this.number = 0;
    this.animationState = 'initial';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = 'final';
    }, 100);
  }
}

