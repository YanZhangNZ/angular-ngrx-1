import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';


//from course
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/userName.reducer';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('maskUserName',reducer)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
