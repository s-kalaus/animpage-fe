import { Component, HostBinding, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LoadingService } from '../../service/loading/loading.service';

declare var navigator: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private langAvailable: string[] = ['en'];

    @HostBinding('class') className = 'd-flex flex-fill flex-shrink-0';

    constructor(
        public loadingService: LoadingService,
        private translateService: TranslateService
    ) {}

    ngOnInit() {

        const langCurrent = String(navigator.language).toLowerCase();

        this.translateService.setDefaultLang('en');
        this.translateService.use(this.langAvailable.indexOf(langCurrent) === -1 ? 'en' : langCurrent);
    }
}
