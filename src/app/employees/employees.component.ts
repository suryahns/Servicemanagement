import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
 
  }

}
