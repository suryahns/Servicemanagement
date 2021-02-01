import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private service:EmployeeService) { }
  list: Employee[];
  ngOnInit(): void {
    this.service.getEmployees().subscribe(actionArray =>{
      this.list= actionArray.map(item =>{
  return {
    id: item.payload.doc.id,
    ...item.payload.doc.data } as Employee
    ;
})
    });
  }
  onEdit(emp:Employee){
    this.service.formData=Object.assign({},emp);
  }
}
