import { NgModule } from '@angular/core';

import { AnimpageComponent } from './component/animpage/animpage.component';
import { AnimpageRoutingModule } from './animpage-routing.module';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        AnimpageComponent
    ],
    imports: [
        AnimpageRoutingModule,
        SharedModule
    ]
})
export class AnimpageModule { }
