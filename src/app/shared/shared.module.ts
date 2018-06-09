import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ng2-cookies';
import { TranslateModule } from '@ngx-translate/core';
import { NouisliderModule } from 'ng2-nouislider';
import { ModalModule } from 'ngx-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';

import { TrustedPipe } from '../pipe/trusted/trusted.pipe';
import { LoadingService } from '../service/loading/loading.service';
import { ApiService } from '../service/api/api.service';
import { AuthService } from '../service/auth/auth.service';
import { AlertService } from '../service/alert/alert.service';
import { AuthRouteService } from '../service/auth-route/auth-route.service';

@NgModule({
    declarations: [
        TrustedPipe
    ],
    imports: [
        CommonModule,
        ModalModule.forRoot(),
        TranslateModule.forChild(),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule
    ],
    exports: [
        TrustedPipe,
        CommonModule,
        TranslateModule,
        ModalModule,
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        LocalStorageModule
    ]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {

        return {
            ngModule: SharedModule,
            providers: [
                CookieService,
                ApiService,
                AuthService,
                AlertService,
                AuthRouteService,
                LoadingService
            ]
        };
    }
}
