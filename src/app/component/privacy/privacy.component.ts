import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
    @HostBinding('class') className = 'd-flex flex-fill';
}
