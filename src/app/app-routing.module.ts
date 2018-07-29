import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { PrivacyComponent } from './component/privacy/privacy.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './module/animpage/animpage.module#AnimpageModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
