import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public featuredLink = [
    {
      link:"../../assets/art-boutique-clothes-920735.jpg",
      title:"Title",
      price:"123",
      info:"A brief Info"
    },
    {
      link:"../../assets/coat-cold-female-54206.jpg",
      title:"Title",
      price:"1",
      info:"A brief Info"
    },
    {
      link:"../../assets/trekking-hiking-group-alpine-53214.jpeg",
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
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
  {
    cardTitle: "hello",
    cardInfo: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    cardLink: "../../assets/action-adult-adventure-356808.jpg"
  },
]
slideConfig2 = {
  "slidesToShow":4,
  "slidesToScroll": 4,
  "infinite": true,
  
};

}
