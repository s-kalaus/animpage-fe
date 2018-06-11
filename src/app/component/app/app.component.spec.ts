import { TestBed, async } from '@angular/core/testing';

import { TestModule } from '../../shared/test.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                TestModule
            ]
        }).overrideComponent(AppComponent, { set: { template: '' } }).compileComponents();
    }));

    it('should create the app', async(() => {

        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));
});
