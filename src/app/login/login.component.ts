import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false;
  forAdminLogin = false;
  itemValue:" ";
  constructor(public firebaseService: FirebaseService, private router: Router, public db: AngularFireDatabase) { }

  ngOnInit(): void {
  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)

    if (this.firebaseService.isLoggedIn) {
      if (email == "Admin123@gmail.com" && password == "admin123") {
              this.forAdminLogin = true;
              console.log("Admin Login Works")
      } else {
        this.isSignedIn = true;
      }


    }
  }
  handleLogout() {
    this.isSignedIn = false;
    this.forAdminLogin = false;
  }
  signUp() {

    this.router.navigateByUrl("signup")
  }
  logout() {

    this.handleLogout()
  }
  onSubmit(){
    this.db.list('items').push({content: this.itemValue});
    
  }
 
}
