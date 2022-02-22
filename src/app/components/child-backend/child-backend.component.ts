import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../../interface/employee.interface';

@Component({
  selector: 'app-child-backend',
  templateUrl: './child-backend.component.html',
  styleUrls: ['./child-backend.component.css'],
})
export class ChildBackendComponent implements OnInit {
  @Input() employee!: Employee;
  @Input() renderEmployee!: boolean;
  name = '';

  constructor() {}

  ngOnInit(): void {}
}
