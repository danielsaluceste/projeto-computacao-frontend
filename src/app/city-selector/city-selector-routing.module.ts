import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitySelectorPage } from './city-selector.page';

const routes: Routes = [
  {
    path: '',
    component: CitySelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitySelectorPageRoutingModule {}
