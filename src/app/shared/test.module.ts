import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { Cookie } from 'ng2-cookies';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalStorageModule } from 'angular-2-local-storage';

import { SharedModule } from './shared.module';

export function createTranslateLoader(http: HttpClient) {

    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export function tokenGetter() {

    return Cookie.get('token');
}

@NgModule({
    imports: [
        BrowserModule,
        SharedModule.forRoot(),
        JwtModule.forRoot({ config: { tokenGetter: tokenGetter } }),
        TranslateModule.forRoot(),
        LocalStorageModule.withConfig({ prefix: 'animpage', storageType: 'localStorage' })
    ]
})
export class TestModule { }
