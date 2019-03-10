import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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


     $("#access-panel").hover(function(){
        $(this).animate({opacity: 0.75}, 500);
        // $("#access-panel-h2").css({color:"black",opacity:1, "background-color": "white" })
     }, function() {
        $(this).animate({opacity: 1}, 500);
        // $("#access-panel-h2").css({color:"white",opacity:1,"background-color": ''},500)
      });

      $("#men-panel").hover(function(){
        $(this).animate({opacity: 0.75}, 500);
        // $("#accessories-section-h2").css({color:"black",opacity:1, "background-color": "white" })
     }, function() {
        $(this).animate({opacity: 1}, 500);
        // $("#accessories-section-h2").css({color:"white",opacity:1,"background-color": ''},500)
      });

      $("#women-panel").hover(function(){
        $(this).animate({opacity: 0.75}, 500);
        // $("#accessories-section-h2").css({color:"black",opacity:1, "background-color": "white" })
     }, function() {
        $(this).animate({opacity: 1}, 500);
        // $("#accessories-section-h2").css({color:"white",opacity:1,"background-color": ''},500)
      });
}
}
