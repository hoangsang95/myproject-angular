import { animate, style, transition, trigger } from '@angular/animations';
export const ProductAnimation = trigger('productState', [
    transition(':enter',  [
        style({
            opacity: 0,
            transform: 'translateX(-200px'
        }),
        animate('500ms ease-out')
    ]),
    transition(':leave', animate('300ms ease-out', style({
        opacity: 0,
        transform: 'translateX(200px)'
    })))
])