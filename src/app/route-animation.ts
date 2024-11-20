import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(100%)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '300ms ease-out',
          style({
            position: 'absolute',
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
