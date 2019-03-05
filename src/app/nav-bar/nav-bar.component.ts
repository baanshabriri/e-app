import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
     $("#sidebarToggle").click(function(){
      $("#mySidenav").width("250px");
    })

    $("#sidebarBack").click(function(){
      $("#mySidenav").width("0px")
    })
  })
} 
  

}
