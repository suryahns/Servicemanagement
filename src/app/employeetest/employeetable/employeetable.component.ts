import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent implements OnInit {
  itemValue ="";
  employees: Observable<any[]>;
  constructor(public firebaseService: FirebaseService, private router: Router, public db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.employees=this.db.list('employees').valueChanges();
  }

}
