import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {
    setTimeout(() => {
      StatusBar.setStyle({
        style: Style.Light,
      });
    }, 500);
  }

}
