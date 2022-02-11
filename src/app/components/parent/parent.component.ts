import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  counter = 0;
  childCounter: number = 0;

  constructor() {}

  ngOnInit(): void {}
  incrementCounter() {
    this.counter++;
  }
  incrementChildCounter(value: number) {
    this.childCounter = value;
  }
}
