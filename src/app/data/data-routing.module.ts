import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataComponent } from './data.component';

const dataRoutes: Routes = [
    {
        path: '',
        component: DataComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(dataRoutes)],
    exports: [RouterModule],
})
export class DataRoutingModule { }
