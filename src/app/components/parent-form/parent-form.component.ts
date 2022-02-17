import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interface/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css'],
})
export class ParentFormComponent implements OnInit {
  private id: number = 1;
  private index: number = 1;
  renderForm = false;
  renderEmployee = false;
  employees!: Employee[];
  employee!: Employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.retrieveEmployees();
    this.firstRender();
    console.log(this.id);
  }

  retrieveEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        console.log(this.employees);
      },
      error: (e) => console.error(e),
    });
  }
  onAddEmployee() {
    this.renderEmployee = false;
    this.renderForm = true;
  }

  firstRender() {
    this.renderEmployee = true;
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: (e) => console.error(e),
    });
  }

  // method2;
  onClickHandler() {
    this.renderEmployee = true;
    this.renderForm = false;
    if (this.index < this.employees.length) {
      console.log(this.index);
      this.employee = this.employees[this.index];
      this.index++;
      console.log(this.employee);
    } else {
      this.index = 0;
      this.employee = this.employees[this.index];
    }
  }

  checkIfEmployeeExists() {
    if (this.employee) {
      return true;
    }
    return false;
  }
}
