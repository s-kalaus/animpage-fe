import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'trusted'
})

export class TrustedPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}

    transform(value: any, args?: any): any {

        if (!value) {
            return '';
        }

        if (args === 'style') {
            return this.sanitizer.bypassSecurityTrustStyle(value);
        }

        if (args === 'url') {
            return this.sanitizer.bypassSecurityTrustUrl(value);
        }

        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
