import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedIn = false;
  constructor(public db : AngularFireDatabase,public firebaseService : FirebaseService,private router: Router) { }

  ngOnInit(): void {
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn){
      //this.isSignedIn=true;
      this.router.navigateByUrl('/login')
    }
}
handleLogout(){
  this.isSignedIn=false;
  this.router.navigateByUrl('/login')
  }
  logout(){
       
    this.handleLogout()
     }
}
