import { animate, keyframes, style, transition, trigger } from '@angular/animations';
export const AuthAnimation = trigger('authState', [
    transition(':enter', [
        animate('400ms ease-out', keyframes([
            style({
                transform: 'translateY(-100%)',
            }),
            style({
                transform: 'translateY(0)',
            })
        ]))
    ])

])