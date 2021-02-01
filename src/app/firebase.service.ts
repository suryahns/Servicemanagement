import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

 


  isLoggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email:string,password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  async signup(email:string,password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedIn = true;
      //localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
 
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
  resetPassword(email:string){
          return this.firebaseAuth.sendPasswordResetEmail(email)
          .then(()=>console.log("We've sent you a reset password link"))
          .catch(error=>console.log(error.message));
          
  }
  loggedIn(){
    return!! localStorage.getItem('token')
  }
}
