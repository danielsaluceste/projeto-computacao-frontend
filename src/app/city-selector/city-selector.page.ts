import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.page.html',
  styleUrls: ['./city-selector.page.scss'],
})
export class CitySelectorPage implements OnInit {

  public selectedState: any;
  public loadingStates: boolean = true;
  public loadingCity: boolean = true;

  public states = [];
  public cities = [];

  constructor(public http: HttpClient, private storage: Storage, public router: Router) { }

  ngOnInit() {
    this.http.get('http://www.geonames.org/childrenJSON?geonameId=3469034').subscribe((data: any) => {
      this.states = data.geonames;
      this.loadingStates = false;
      console.log(this.states);
    });
  }

  selectState(state) {
    if (state == this.selectedState) {
      this.selectedState = null;
      this.cities = [];
    } else {
      this.loadingCity = true;
      this.selectedState = state;

      this.http.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados/' + state + '/municipios').subscribe((data: any) => {
        this.cities = data;
        this.loadingCity = false;
      });
    }
  }

  async selectCity(city) {
    await this.storage.set('locale', {city: city, state: this.selectedState});
    this.router.navigateByUrl('/tabs/tab1').then(() => {
      location.reload();
    });
  }

}
