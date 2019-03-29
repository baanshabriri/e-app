import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SlickModule } from 'ngx-slick';
import { NguCarouselModule } from '@ngu/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BackpackComponent } from './backpack/backpack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    BlogComponent,
    BackpackComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SlickModule.forRoot(),
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
