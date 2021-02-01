import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-employeeinput',
  templateUrl: './employeeinput.component.html',
  styleUrls: ['./employeeinput.component.css']
})
export class EmployeeinputComponent implements OnInit {
  itemValue ={fullName:"",
  empCode:"",
  phoneNumber:"",position:""};
  
  employee: Observable<any[]>;
  constructor(public db : AngularFireDatabase,public firebaseService : FirebaseService,private router: Router) { }

  ngOnInit(): void {
    this.employee=this.db.list('employees').valueChanges();
  }
  onSubmit(){
    this.db.list('employees').push({content: this.itemValue});
   this.itemValue={fullName:null,
    empCode:null,
    phoneNumber:null,position:null};
  
   
  }

}
