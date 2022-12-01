import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  public os;

  constructor(public plataform: Platform) { }

  ngOnInit() {
    if (this.plataform.is('ios') && this.plataform.is('capacitor')) {
      this.os = 'ios';
    } else if (this.plataform.is('android') && this.plataform.is('capacitor')) {
      this.os = 'android';
    } else {
      this.os = 'web';
    }
  }

}
