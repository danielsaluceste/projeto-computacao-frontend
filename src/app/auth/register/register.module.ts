import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { NgxMaskModule } from 'ngx-mask';
import { BrMaskerModule } from 'br-mask';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BrMaskerModule,
    SimpleMaskModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
