import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css',]
})
export class AboutUsComponent implements OnInit {
  public num:any;
  public even:any;
  public odd:any;
  public slide:any;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // $('#slider').cardslider();
  }
  

  public featuredLink = [
    {
      link:"../../assets/products/9-1024x1024.jpg",
      link2:"../../assets/products/6-1024x1024.jpg",
      title:"Title",
      price:"123",
      info:"A brief Info"
    },
    {
      link:"../../assets/products/TLM_2871-copy-700x1024.jpg",
      link2:"../../assets/products/TLM_2875-copy-700x1024.jpg",
      title:"Title",
      price:"1",
      info:"A brief Info"
    },
    {
      link:"../../assets/products/B07DVB695Qfr-700x1024.jpg",
      link2:"../../assets/products/B07DVB695Qback-700x1024.jpg",
      title:"Title",
      price:"2",
      info:"A brief Info"
    }
  ]
  slideConfig = {
    "slidesToShow":1,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    speed:700,
    fade:true,
    accessibility: true,
    adaptiveHeight: false,
}; 

// ngAfterViewInit() {
//   this._cdr.detectChanges();
// }
// public carouselConfig: NguCarouselConfig = {
//   grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
//   load: 1,
//   slide: 3,
//   interval: {
//     timing: 3000,
//     initialDelay: 1000
//   },
//   loop: false,
//   touch: true,
//   speed: 575,
//   easing: 'ease-in',
//   animation:'lazy'
// };

public card = [
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?horizon"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?spectrum"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?grass"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?holiday"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?mountain"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?people"
  }
];
slideConfig2 = {
  "slidesToShow":3,
  "slidesToScroll": 1,
  infinite: true,
  swipeToSlide: true,
   speed:300,
  // fade:true,
  accessibility: true,
  adaptiveHeight: false,
  // centerMode: true,

}; 

public card2 = [
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../assets/20170914-instagram-logo-d.gif"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?fitness"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?grass"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?holiday"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?nature"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?people"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?animals"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?travel"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?arts"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?beauty"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?winter"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?summer"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?autumn"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?firework"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?lone"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "https://source.unsplash.com/626x626/?wild"
  },
];
}

