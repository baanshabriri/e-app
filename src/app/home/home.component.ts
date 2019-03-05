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
    $(document).ready(function(){
      $("#sidebarToggle").click(function(){
       $("#mySidenav").width("250px");
       $(".main").css({opacity:0.5})
     })
 
     $("#sidebarBack").click(function(){
       $("#mySidenav").width("0px")
       $(".main").css({opacity:1})
     })

     $("#apparels-section").hover(function(){
        $(this).animate({opacity: 0.75}, 500);
        $("#apparels-section-h2").css({color:"black",opacity:1, "background-color": "white" })
     }, function() {
        $(this).animate({opacity: 1}, 500);
        $("#apparels-section-h2").css({color:"white",opacity:1,"background-color": ''},500)
      });

      $("#accessories-section").hover(function(){
        $(this).animate({opacity: 0.75}, 500);
        $("#accessories-section-h2").css({color:"black",opacity:1, "background-color": "white" })
     }, function() {
        $(this).animate({opacity: 1}, 500);
        $("#accessories-section-h2").css({color:"white",opacity:1,"background-color": ''},500)
      });
  })
}

}
