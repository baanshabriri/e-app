import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BackpackComponent } from './backpack/backpack.component';
import { StoreComponent } from './store/store.component';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductsingleComponent } from './productsingle/productsingle.component';

const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  {
    path:"backpacks",component: BackpackComponent
  },
  {
    path:"aboutus",component: AboutUsComponent
  },
  {
    path:"blog",component: BlogComponent
  },
  {
    path:"store/:id",component: StoreComponent
  },
  {
    path:"store/:type/:cat",component: ProductListComponent
  },
  {
    path:"store/:type/:cat/:id",component: ProductsingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
