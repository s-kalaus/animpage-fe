import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    shop: string = null;

    constructor(
        private restangular: Restangular
    ) {}

    get(path: string = '', params: any = {}): Observable<any> {

        return this.restangular.all(path).get('', params);
    }

    post(path: string = '', params: any = {}): Observable<any> {

        return this.restangular.all(path).post('', params);
    }

    put(path: string = '', params: any = {}): Observable<any> {

        return this.restangular.one(path).customPUT(params);
    }

    remove(path: string = ''): Observable<any> {

        return this.restangular.one(path).remove();
    }
}
