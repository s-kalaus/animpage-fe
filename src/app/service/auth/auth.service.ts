import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { CookieService } from 'ng2-cookies';

import { Customer } from '../../shared/interface';

@Injectable()
export class AuthService {

    customer$ = new BehaviorSubject<Customer>(null);

    token$ = new BehaviorSubject<string>('initial');

    constructor(
        private jwtHelperService: JwtHelperService,
        private router: Router,
        private cookieService: CookieService
    ) {

        this.init();
    }

    init() {

        this.token$.subscribe((token: string) => this.updateCustomer(token));

        this.checkToken();
    }

    checkToken() {

        this.token$.next(this.cookieService.get('token') || null);
    }

    updateCustomer(token: string) {

        if (token === 'initial') {
            return;
        }

        if (!token || this.jwtHelperService.isTokenExpired(token)) {
            return this.logout();
        }

        this.customer$.next(this.jwtHelperService.decodeToken(token));
    }

    logout() {

        this.cookieService.delete('token');

        this.router.navigate(['login']);
    }
}
