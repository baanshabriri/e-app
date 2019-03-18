import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css']
})
export class BackpackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public bagsLink = [
    {
      link:"../../assets/backpack-bag-1546003.png",
      title:"Bag Title",
      price:"123",
      info:"A brief Info"
    },
    {
      link:"../../assets/backpack-bag-1546003.png",
      title:"Bag Title",
      price:"1",
      info:"A brief Info"
    },
    {
      link:"../../assets/backpack-bag-1546003.png",
      title:"Bag Title",
      price:"2",
      info:"A brief Info"
    },
    {
      link:"../../assets/backpack-bag-1546003.png",
      title:"Bag Title",
      price:"3",
      info:"A brief Info"
    },
    {
      link:"../../assets/backpack-bag-1546003.png",
      title:"Bag Title",
      price:"4",
      info:"A brief Info"
    },
    {
      link:"../../assets/backpack-bag-1546003.png",
      title:"Bag Title",
      price:"5",
      info:"A brief Info"
    }
  ]
  // slideConfig = {'slidesToShow': 3, 'slidesToScroll': 1};
  slideConfig = {
    "slidesToShow":3,
    "slidesToScroll": 1,
    "infinite": true,
};  


  
}
