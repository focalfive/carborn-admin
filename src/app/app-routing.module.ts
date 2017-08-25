import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth-guard';

const appRoutes: Routes = [
    {
        path: 'data',
        canActivate: [AuthGuard],
        loadChildren: 'app/data/data.module#DataModule',
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule',
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class AppRoutingModule { }
