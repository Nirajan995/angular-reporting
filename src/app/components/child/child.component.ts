import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  childCtr = 1;
  @Input() parentCounter!: number;
  @Output() childCounter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  incrementParentCounter() {
    this.childCounter.emit(this.childCtr++);
  }
}
