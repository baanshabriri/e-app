import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public start:Number;
  public end:Number;
  private category: string;
  private type:any;
  private typeBool: Boolean;
  constructor(private route: ActivatedRoute, private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.route.paramMap.subscribe(params => {
        this.category = params.get('id')
        console.log("hello",this.category);
    });
    const scrollPosition = window.pageYOffset;
    if(scrollPosition> 0){
      this.start = 0;
      this.end = +this.end + 3;
    }
    else{
      this.start = 0;
      this.end = 9;
    }
    this.selectCat(this.category);
  }
  selectCat(category: string): any {
    if(category == 'men'){
      this.type = this.men
      this.typeBool = true;
    }
    else {
      this.type = this.women
      this.typeBool = false
    }
  }

  gotoCat(cate){
    this.selectCat(cate);
    console.log("hello");
  }


  public storeMenu = [
    'shirts',
    'fleece',
    'pants',
    'softshell',
    'down'
  ]


  public men = [
    {
      "img":"https://source.unsplash.com/626x626/?tshirts",
    },
    {
      "img":"https://source.unsplash.com/626x626/?pants",
    },
    {"img":"https://source.unsplash.com/626x626/?pants",
    },
    {"img":"https://source.unsplash.com/626x626/?pants",
    },
    {"img":"https://source.unsplash.com/626x626/?pants",
    },
    {"img":"https://source.unsplash.com/626x626/?pants",
    }
  ]

  private women = [
    {
      "img":"https://source.unsplash.com/626x626/?tshirt",
    },
    {
      "img":"https://source.unsplash.com/626x626/?tshirt",
    },
    {"img":"https://source.unsplash.com/626x626/?tshirt",
    },
    {"img":"https://source.unsplash.com/626x626/?tshirt",
    },
    {"img":"https://source.unsplash.com/626x626/?tshirt",
    },
    {"img":"https://source.unsplash.com/626x626/?tshirt",
    }
  ]
}
