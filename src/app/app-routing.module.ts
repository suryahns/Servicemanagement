import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CustomerafterpageComponent } from './customerafterpage/customerafterpage.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { EmployeetableComponent } from './employeetest/employeetable/employeetable.component';
import { EmployeetestComponent } from './employeetest/employeetest.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { TesthomeComponent } from './testhome/testhome.component';
import { Testhome2Component } from './testhome2/testhome2.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent  },
  { path: "signup", component: SignupComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "test", component: TestComponent },
  { path: "testhome", component: TesthomeComponent},
  { path: "test2", component: Test2Component },
  { path: "testhome2",component: Testhome2Component},
  {path:"customerpage",component:CustomerpageComponent,canActivate:[AuthGuard]},
  {path:"admin",component:AdminpageComponent,canActivate:[AuthGuard]},
  {path:"empolyeetest",component:EmployeetestComponent},
  {path:"customerafterpage",component:CustomerafterpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
