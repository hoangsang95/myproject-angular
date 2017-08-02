import { state, style, transition, trigger, animate } from '@angular/animations';
export const cateAnimation = trigger('cateState', [
    // state('normal', style({
    //     opacity: 1
    // })),
    // state('fade', style({
    //     opacity: 0
    // })),
    state('true', style({ backgroudColor: 'transparent'})),
    state('false', style({ backgroudColor: 'transparent'})),
    transition('true => false', animate('1000ms ease-out', style({
        backgroundColor: 'red'
    })))
])

export const slideInDownAnimation =
    trigger('routeAnimation', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-200px)'
            }),
            animate('500ms ease-out')
        ]),
        transition(':leave', animate('300ms ease-out', style({
            opacity: 0,
            transform: 'translateX(200px)'
        })))
    ]);