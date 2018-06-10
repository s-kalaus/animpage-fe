import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

import { Customer } from '../../shared/interface';

@Injectable()
export class AuthRouteService implements CanActivate {

    private customer: Customer = null;

    constructor(
        private authService: AuthService
    ) {

        this.authService.customer$.subscribe((customer: Customer) => this.customer = customer);
    }

    canActivate() {

        if (!this.customer) {

            this.authService.logout();

            return false;
        }

        return true;
    }
}
