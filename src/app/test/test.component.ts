import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
title= 'Angular8Firebase';
description  = 'Angular-Fire-Demo';
itemValue ="";
items: Observable<any[]>;
isSignedIn = false;
  constructor(public db : AngularFireDatabase,public firebaseService : FirebaseService,private router: Router) { 
    this.items=db.list('items').valueChanges();
  }

  ngOnInit() {
    if(localStorage.getItem('user')!=null)
    {
      this.isSignedIn=true;
    }else{
      this.isSignedIn=false;
    }
    this.items=this.db.list('items').valueChanges();
  }
  async onSignup(email:string,password:string){
      await this.firebaseService.signup(email,password)
      if(this.firebaseService.isLoggedIn){
        this.isSignedIn=true;
      }
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn=true;
      
    }
}
handleLogout(){
this.isSignedIn=false;
}
  onSubmit(){
    this.db.list('items').push({content: this.itemValue});
    this.itemValue='';
  }
  logout(){
       
    this.handleLogout()
     }
}
