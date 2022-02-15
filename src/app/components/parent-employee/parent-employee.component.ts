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

  onClickHandler() {
    console.log(this.id);
    this.id++;
    console.log(this.id);
    if (this.id < this.employees.length) {
      this.employeeService.getEmployeeById(this.id).subscribe({
        next: (data) => {
          this.employee = data;
        },
        error: (e) => console.error(e),
      });
    } else {
      this.id = 0;
    }
  }
}
