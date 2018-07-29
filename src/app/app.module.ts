import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { RestangularModule } from 'ngx-restangular';
import { JwtModule } from '@auth0/angular-jwt';
import { Cookie } from 'ng2-cookies';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './service/auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { RestangularConfigFactory } from './shared/provider';
import { AppComponent } from './component/app/app.component';
import { LoginComponent } from './component/login/login.component';
import { PrivacyComponent } from './component/privacy/privacy.component';

export function createTranslateLoader(http: HttpClient) {

    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export function tokenGetter() {

    return Cookie.get('token');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PrivacyComponent
    ],
    imports: [
        BrowserModule,
        SharedModule.forRoot(),
        AppRoutingModule,
        RestangularModule.forRoot([AuthService], RestangularConfigFactory),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter
            }
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [
                    HttpClient,
                    Location
                ]
            }
        }),
        LocalStorageModule.withConfig({
            prefix: 'animpage',
            storageType: 'localStorage'
        })
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
