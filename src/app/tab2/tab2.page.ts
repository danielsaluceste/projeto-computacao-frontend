import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public segment: any = 1;

  constructor() {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
