import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, iosTransitionAnimation } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APIInterceptor } from './app.service';
import { BrMaskerModule } from 'br-mask';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({ navAnimation: iosTransitionAnimation, swipeBackEnabled: true }), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(), 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule,
    BrMaskerModule,
    SimpleMaskModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    File,
    FileTransfer,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
