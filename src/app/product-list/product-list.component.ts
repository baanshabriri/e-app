import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  start: number;
  end: number;
  arrayToBeAdded: { "img": string; "price": number; "Title": string; }[];
  title: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.title = params.get('cat')
      console.log("hello",this.title);
  });
  }

  public productList = [
    {
      "img":"https://source.unsplash.com/626x626/?clothes",
      "price":1,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?hello",
      "price":2,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?hi",
      "price":3,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?wtf",
      "price":4,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?nature",
      "price":5,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?store",
      "price":6,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?clothes",
      "price":7,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?hello",
      "price":8,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?hi",
      "price":9,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?wtf",
      "price":10,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?nature",
      "price":11,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?store",
      "price":12,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?clothes",
      "price":13,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?hello",
      "price":14,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?hi",
      "price":15,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?wtf",
      "price":16,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?nature",
      "price":17,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?store",
      "price":18,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?clothes",
      "price":19,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?hello",
      "price":20,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?hi",
      "price":21,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?wtf",
      "price":22,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?nature",
      "price":36,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?store",
      "price":24,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?clothes",
      "price":26,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?hello",
      "price":27,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?hi",
      "price":28,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?wtf",
      "price":29,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?nature",
      "price":30,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?store",
      "price":31,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?clothes",
      "price":32,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?hello",
      "price":33,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?hi",
      "price":34,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?wtf",
      "price":35,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?nature",
      "price":36,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?store",
      "price":36,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?clothes",
      "price":36,
      "Title":'Title',
    },
    {
      "img":"https://source.unsplash.com/626x626/?hello",
      "price":36,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?hi",
      "price":36,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?wtf",
      "price":36,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?nature",
      "price":36,
      "Title":'Title',
    },
    {"img":"https://source.unsplash.com/626x626/?store",
      "price":36,
      "Title":'Title',
    }
    
  ]

  public products =[
    {
    "img":"https://source.unsplash.com/626x626/?clothes",
    "price":1,
    "Title":'Title',
  },
  {
    "img":"https://source.unsplash.com/626x626/?hello",
    "price":2,
    "Title":'Title',
  },
  {"img":"https://source.unsplash.com/626x626/?hi",
    "price":3,
    "Title":'Title',
  },
  {"img":"https://source.unsplash.com/626x626/?wtf",
    "price":4,
    "Title":'Title',
  },
  {"img":"https://source.unsplash.com/626x626/?nature",
    "price":5,
    "Title":'Title',
  },
  {"img":"https://source.unsplash.com/626x626/?store",
    "price":6,
    "Title":'Title',
  },
  {
    "img":"https://source.unsplash.com/626x626/?clothes",
    "price":7,
    "Title":'Title',
  },
  {
    "img":"https://source.unsplash.com/626x626/?hello",
    "price":8,
    "Title":'Title',
  },
  {"img":"https://source.unsplash.com/626x626/?hi",
    "price":9,
    "Title":'Title',
  }]
  
  onScroll(){
    this.start = this.products.length;
    this.end = this.products.length + 3;
    this.arrayToBeAdded = this.productList.slice(this.start,this.end )
    for(let i=0;i<this.arrayToBeAdded.length;i++){
      this.products.push(this.arrayToBeAdded[i]);
    }
  } 

}
