import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BackpackComponent } from './backpack/backpack.component';
import {scrollM} from '../app/home/m.directive';
import { StoreComponent } from './store/store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsingleComponent } from './productsingle/productsingle.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    BlogComponent,
    BackpackComponent,
    scrollM,
    StoreComponent,
    ProductListComponent,
    ProductsingleComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
