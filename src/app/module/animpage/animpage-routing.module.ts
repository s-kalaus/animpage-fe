import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRouteService } from '../../service/auth-route/auth-route.service';
import { AnimpageComponent } from './component/animpage/animpage.component';

export const routes: Routes = [
    { path: '', component: AnimpageComponent, canActivate: [ AuthRouteService ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AnimpageRoutingModule {}
