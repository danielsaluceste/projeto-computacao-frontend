import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostProductPage } from './post-product.page';

const routes: Routes = [
  {
    path: '',
    component: PostProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostProductPageRoutingModule {}
