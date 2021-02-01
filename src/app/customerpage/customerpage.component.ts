import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  itemValue ={userName:"",
  email:"",
  phoneNumber:"",vehicleNumber:"",vehicleModel:"",comments:"",date:""};
  items: Observable<any[]>;
 alert:boolean=false;
  constructor(public db : AngularFireDatabase,public firebaseService : FirebaseService,private router: Router) {
  }
  ngOnInit(): void {
    this.items=this.db.list('items').valueChanges();
  }
  checked: boolean = false;
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit();
console.log("works")
  }
  onSubmit(){
    this.db.list('items').push({content: this.itemValue});
   this.alert=true;
   this.itemValue={
    userName:"",
    email:"",
    phoneNumber:"",vehicleNumber:"",vehicleModel:"",comments:"",date:""
   };
    console.log(this.itemValue)
    console.log(this.items)  
   
  }
  alertclose(){
    this.alert=false;
 
  }
}