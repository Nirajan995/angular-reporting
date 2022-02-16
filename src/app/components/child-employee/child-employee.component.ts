import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../interface/employee.interface';

@Component({
  selector: 'app-child-employee',
  templateUrl: './child-employee.component.html',
  styleUrls: ['./child-employee.component.css'],
})
export class ChildEmployeeComponent implements OnInit {
  @Input() employee!: Employee;

  constructor() {}

  ngOnInit(): void {}
}
