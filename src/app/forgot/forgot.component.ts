import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
email:string;
  constructor(public firebaseService : FirebaseService,private router: Router) { }

  ngOnInit(): void {
  }
resetPassword(email){
  this.firebaseService.resetPassword(this.email)
  .then(()=>this.router.navigateByUrl('/login'))
}
}
