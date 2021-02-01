import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  forUserList= true;
  forServiceList=true;
  forCustomerList=true;
  itemValue ="";
  
  name: any;
  id:any;
  phonenumber:any;
  vehicleNumber:any;
  vehicleModel:any;
  comment:any;
  date:any;
  SearchValue:any;

  items: Observable<any[]>;

  constructor(public firebaseService: FirebaseService, private router: Router, public db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.items=this.db.list('items').valueChanges();
    console.log(this.items)
  }
  
change(){
  this.forUserList=false;
  console.log("user Works")
  console.log(this.forUserList)
}

back(){
  this.forUserList=true;
  console.log("Works")
}

change1(){
  this.forServiceList=false;
  console.log("serviceWorks")
} 


 back1(){
  this.forServiceList=true;
  console.log("Works")
}


change2(){
  this.forCustomerList=false;
  console.log("customer Works")
}

back2(){
  this.forCustomerList=true;
  console.log("Works")
}
onSubmit(){

}
logout(){
  this.firebaseService.logout()
  this.isLogout.emit();
  console.log("Fuction Works");
}
}
