import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-testhome2',
  templateUrl: './testhome2.component.html',
  styleUrls: ['./testhome2.component.css']
})
export class Testhome2Component implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  constructor(private router: Router,public db : AngularFireDatabase,public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit();
console.log("works")
  }
}
