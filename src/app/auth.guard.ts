import { flatten } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import {FirebaseService} from './firebase.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public firebaseService : FirebaseService,private router: Router){

  }
  canActivate():boolean{
    if (this.firebaseService.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
    
    }
  
  

