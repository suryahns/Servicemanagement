import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import{environment} from '../environments/environment'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TestComponent } from './test/test.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { TesthomeComponent } from './testhome/testhome.component';
import { Test2Component } from './test2/test2.component';
import { Testhome2Component } from './testhome2/testhome2.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

import { EmployeeService } from './shared/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmployeelistComponent } from './employees/employeelist/employeelist.component';

import { EmployeetestComponent } from './employeetest/employeetest.component';
import { EmployeeinputComponent } from './employeetest/employeeinput/employeeinput.component';
import { EmployeetableComponent } from './employeetest/employeetable/employeetable.component';
import { CustomerafterpageComponent } from './customerafterpage/customerafterpage.component';
import { FilterPipe } from './filter.pipe';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    TestComponent,
    TesthomeComponent,
    Test2Component,
    Testhome2Component,
    CustomerpageComponent,
    AdminpageComponent,
    EmployeesComponent,
    EmployeeComponent,
   
    EmployeelistComponent,
   

   
    EmployeetestComponent,
   
    EmployeeinputComponent,
   
    EmployeetableComponent,
   
    CustomerafterpageComponent,
   
    FilterPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
