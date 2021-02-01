import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  isSignedIn = false;
  
  title= 'Angular8Firebase';
  description  = 'Angular-Fire-Demo';
 itemValue ={userName:"",
 id:"",
 phoneNumber:"",vehicleNumber:"",vehicleModel:"",comments:"",date:""

};
  items: Observable<any[]>;

  constructor(public db : AngularFireDatabase,public firebaseService : FirebaseService,private router: Router) { }

  ngOnInit(): void {
    this.items=this.db.list('items').valueChanges();
  }
  onSubmit(){
    this.db.list('items').push({content: this.itemValue});
    console.log(this.itemValue)
    console.log(this.items)
    
   
  }
}
