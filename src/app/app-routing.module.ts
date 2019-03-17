import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BackpackComponent } from './backpack/backpack.component';

const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  {
    path:"backpacks",component: BackpackComponent
  },
  {
    path:"aboutUs",component: AboutUsComponent
  },
  {
    path:"blog",component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
