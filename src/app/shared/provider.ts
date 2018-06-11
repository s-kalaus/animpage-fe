import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { AuthService } from '../service/auth/auth.service';

export function RestangularConfigFactory (RestangularProvider: any, authService: AuthService) {

    RestangularProvider.setBaseUrl(environment.apiUrl);

    RestangularProvider.addFullRequestInterceptor((element: any, operation: any, path: any, url: any, headers: any, params: any) => {

        return {
            params: params,
            headers: Object.assign({
                Authorization: 'Bearer ' + authService.token$.getValue()
            }, headers),
            element: element
        };
    });

    RestangularProvider.addResponseInterceptor(function(data: any, operation: any, what: any, url: any, response: any, deferred: any) {

        if (!data) {

            return deferred.error({
                success: false,
                message: 'No response from server'
            });
        }

        if (!data.success) {

            return deferred.error({
                success: false,
                code: data.code || null,
                message: data.message ? data.message : 'API error'
            });
        }

        const ret = data.data || data;

        if (ret && data) {

            if (data.total !== undefined) {
                ret.total = data.total;
            }
        }

        return ret;
    });

    RestangularProvider.setErrorInterceptor(function(response: any, deferred: any, responseHandler: any) {

        if (response && response.status === 403) {

            authService.logout();

            return false;
        }

        return true;
    });
}

@Injectable()
export class Restangular {
    all (path: any): any { return { post: (arg1: any, arg2?: any) => {}, get: (arg1: any, arg2?: any) => {} }; }
    one (path: any): any { return { customPUT: (arg1: any) => {}, remove: () => {} }; }
}
