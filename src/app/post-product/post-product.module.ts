import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostProductPageRoutingModule } from './post-product-routing.module';

import { PostProductPage } from './post-product.page';
import { BrMaskerModule } from 'br-mask';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostProductPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule,
    SimpleMaskModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [PostProductPage]
})
export class PostProductPageModule {}
