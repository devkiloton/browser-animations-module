import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('formState200', [
      state('move', style({
      transform:'translateX(-30%)'
      })),
      transition('* => *', animate('200ms ease'))
    ]),
    trigger('formState350', [
      state('move', style({
      transform:'translateX(-30%)'
      })),
      transition('* => *', animate('350ms ease'))
    ]),
    trigger('formState500', [
      state('move', style({
      transform:'translateX(-30%)'
      })),
      transition('* => *', animate('500ms ease'))
    ]),
    trigger('formState650', [
      state('move', style({
      transform:'translateX(-30%)'
      })),
      transition('* => *', animate('650ms ease'))
    ]),
    trigger('formState800', [
      state('move', style({
      transform:'translateX(-30%)'
      })),
      transition('* => *', animate('800ms ease'))
    ]),
    trigger('scaleImage', [
      state('move', style({
      transform:'scale(1.2)'
      })),
      transition('* => move', animate('2000ms ease',
      keyframes([
        style({transform:'scale(1)', offset:0}),
        style({transform:'scale(1.35)', offset:0.33}),
        style({transform:'scale(1)', offset:0.66}),
        style({transform:'scale(1.2)', offset:1})
      ])))
    ]),
  ]
})
export class AppComponent {
  position = "";
  title = 'BrowserAnimationsModule';

  changePosition(newPosition: string){
    this.position = newPosition
  }
}
