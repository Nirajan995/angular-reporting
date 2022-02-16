import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-parent-employee',
  templateUrl: './parent-employee.component.html',
  styleUrls: ['./parent-employee.component.css'],
})
export class ParentEmployeeComponent implements OnInit {
  private id: number = 0;
  employees!: Employee[];
  employee!: Employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.retrieveEmployees();
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

  // method:1
  // onClickHandler() {
  //   console.log(this.id);
  //   this.id++;
  //   let employeeLength: number = 0;
  //   if (this.employees) {
  //     employeeLength = this.employees.length;
  //   }
  //   console.log(this.id);
  //   if (this.id < employeeLength) {
  //     this.employeeService.getEmployeeById(this.id).subscribe({
  //       next: (data) => {
  //         this.employee = data;
  //       },
  //       error: (e) => console.error(e),
  //     });
  //   } else {
  //     this.id = 0;
  //   }
  // }

  // method2
  onClickHandler() {
    this.id++;
    let employeeLength: number = 0;
    if (this.employees) {
      employeeLength = this.employees.length;
    }
    if (this.id < employeeLength) {
      this.employee = this.employees[this.id];
    } else {
      this.id = 0;
    }
  }

  checkIfEmployeeExists() {
    if (this.employee) {
      return true;
    }
    return false;
  }
}
