import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public loading = true;

  public locale: any;
  public products = [];
  public segment: any = 1;

  constructor(public http: HttpClient, public router: Router, private storage: Storage) {}

  async ngOnInit () {
    this.loading = true;
    this.locale = await this.storage.get('locale');
    if (this.locale == null) {
      this.router.navigate(['/city-selector']);
    }
    this.http.get('help/products', {}).subscribe({
      next: (data : any) => {
        this.products = data.filter(item => item.city == this.locale.city).filter(item => item.state == this.locale.state);
        this.loading = false;
      },
      error: error => {
        this.loading = false;
      }
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    if(this.segment==1){
      
    }
    if(this.segment==2){
      
    }
    if(this.segment==3){
      
    }
  }

  doRefresh(event) {
    this.loading = true;

    this.http.get('help/products', {}).subscribe({
      next: (data : any) => {
        this.products = data.filter(item => item.city == this.locale.city).filter(item => item.state == this.locale.state);
        this.loading = false;
        event.target.complete();
      },
      error: error => {
        this.loading = false;
        event.target.complete();
      }
    });
  }

  open (id) {
    localStorage.setItem('animalOpened', id);
    this.router.navigate(['/animal/']);
  }

}
