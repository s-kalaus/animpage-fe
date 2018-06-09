import { series } from 'async';

export class AnimationProvider {

    private timer: any = null;

    start (element: any, effect: string, duration: number, isIn: boolean) {

        clearTimeout(this.timer);
        const el = element.nativeElement;

        el.className = 'd-block w-100'
        el.style = 'visibility: ' + (isIn ? 'hidden' : 'visible');

        return series([
            (next: Function) => {

                el.parentNode.className = 'demo-image-frame demo-countdown step-3';

                this.timer = setTimeout(() => next(), 500);
            },
            (next: Function) => {

                el.parentNode.className = 'demo-image-frame demo-countdown step-2';

                this.timer = setTimeout(() => next(), 500);
            },
            (next: Function) => {

                el.parentNode.className = 'demo-image-frame demo-countdown step-1';

                this.timer = setTimeout(() => next(), 500);
            },
            (next: Function) => {

                el.parentNode.className = 'demo-image-frame';

                this.timer = setTimeout(() => next(), 200);
            },
            (next: Function) => {

                el.className = 'd-block w-100 animated ' + effect;
                el.style = 'animation-duration: ' + (duration / 1000) + 's';

                this.timer = setTimeout(() => next(), duration);
            }
        ], () => {

            el.className = 'd-block w-100';

            if (!isIn) {
                el.style = 'visibility: hidden';
            }

            this.timer = setTimeout(() => this.start(element, effect, duration, isIn), 3000);
        });
    }
}

