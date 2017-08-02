import { keyframes, style, transition, trigger, animate } from '@angular/animations';
export const HomeAnimation = trigger('homeState', [
    transition(':enter', [
        animate('400ms ease-out', keyframes([
            style({
                transform: 'scale(1)',
                offset: 0
            }),
            style({
                transform: 'scale(0)',
                offset: 0.6
            }),
            style({
                transform: 'scale(0.6)',
                offset: 0.8
            }),
            style({
                transform: 'scale(1.4)',
                offset: 1
            }),
        ])),
        animate(100)
    ])
])