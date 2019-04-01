import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

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