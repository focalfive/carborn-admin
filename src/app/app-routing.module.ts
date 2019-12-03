import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth-guard';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CarListComponent } from './car/car-list.component';
import { CarComponent } from './car/car.component';
import { UserLoginComponent } from './user/user-login.component';
import { UserVerifyComponent } from './user/user-verify.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent,  canActivate: [AuthGuard] },
  { path: 'cars', component: CarListComponent,  canActivate: [AuthGuard] },
  { path: 'car/:id', component: CarComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'verify', component: UserVerifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
