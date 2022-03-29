import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitySelectorPageRoutingModule } from './city-selector-routing.module';

import { CitySelectorPage } from './city-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitySelectorPageRoutingModule
  ],
  declarations: [CitySelectorPage]
})
export class CitySelectorPageModule {}
