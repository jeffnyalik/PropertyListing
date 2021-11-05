import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddPropertyComponent } from './components/properties/add-property/add-property.component';
import { PropertyDetailComponent } from './components/properties/property-detail/property-detail.component';
import { PropertyListComponent } from './components/properties/property-list/property-list.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-register', component: UserRegisterComponent},
  {path: '**', component: PropertyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
