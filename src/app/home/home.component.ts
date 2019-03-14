import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { trigger, state, transition, style, animate } from '@angular/animations';
require('slick-carousel');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade',[
      // state(),
      transition('* => void', [
        style({opacity:1}),
        animate(2000,style({opacity:0}))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $("#sidebarToggle").click(function(){
       $("#mySidenav").width("100vw");
       $("#mySidenav").animate({opacity:0.9},200)
     })
 
     $("#sidebarBack").click(function(){
       $("#mySidenav").width("0px")
       $(".main").animate({opacity:1},200)
     })
    
     $("#dropdown").hover(function(){
       $("#menu").animate({opacity:1},500)
     }, function() {
      $("#menu").animate({opacity:0,display:"none"},500)
     })

     $("#menu li").hover(function(){
       $("#menu li").css({visibility: 'visible',
        transform: 'scaleX('+1+')'})
     })

     $("#dropdown2").hover(function(){
      $("#menu2").animate({opacity:1},500)
    }, function() {
     $("#menu2").animate({opacity:0,display:"none"},500)
    })

    $("#menu2 li").hover(function(){
      $("#menu2 li").css({visibility: 'visible',
       transform: 'scaleX('+1+')'})
    })
    
  }
}
