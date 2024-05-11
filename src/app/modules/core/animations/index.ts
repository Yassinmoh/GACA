import { animate, style, transition, trigger } from "@angular/animations";


export const fadeInRight = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(20px)' }),
    animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const fadeOutRight = trigger('fadeOutRight', [
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate('300ms ease-in-out', style({ opacity: 0, transform: 'translateX(20px)' }))
  ])
]);
