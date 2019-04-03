import { Directive, HostListener, HostBinding, ElementRef, Component } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';
import {AnimationEvent} from '@angular/animations';

@Directive({
    selector: '[scroll]',
  })

@Component({
  selector: 'content-box',
  // animations: [
  //   trigger('scrollAnimation', [
  //     state('show', style({
  //       opacity: 1,
  //     })),
  //     state('hide',   style({
  //       opacity: 0,
  //     })),
  //     transition('show => hide', animate('700ms ease-out')),
  //     transition('hide => show', animate('700ms ease-in'))
  //   ])
  // ]
})

export class scrollM {
    constructor(public el: ElementRef) { }
    @HostBinding('style.display') display:string ;
    @HostBinding('@scrollAnimation') state;
    @HostListener("window:scroll", []) onWindowScroll() {
      const scrollPosition = window.pageYOffset
      
      if(scrollPosition > 100){
        this.display = 'block';
        this.state = 'show'
      }
      else{
        this.state = 'hide'
      }
  }
}