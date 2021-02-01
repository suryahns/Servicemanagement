import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-testhome',
  templateUrl: './testhome.component.html',
  styleUrls: ['./testhome.component.css']
})
export class TesthomeComponent implements OnInit {
  
@Output() isLogout = new EventEmitter()
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }
logout(){
  this.firebaseService.logout()
  this.isLogout.emit(null);
}

}
