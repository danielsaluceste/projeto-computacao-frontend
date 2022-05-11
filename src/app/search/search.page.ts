import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public loading: boolean = true;
  public locale: any;
  public products = [];

  public recents: any = [];
  public categories: any = ['teste1', 'teste2', 'teste3', 'teste4', 'teste5', 'teste6', 'teste7', 'teste8', 'teste9', 'teste10'];

  public searchName: string;
  public searchCat: string;

  constructor(private storage: Storage, public http: HttpClient, public router: Router) {  }

  async ngOnInit() {
    let recents = await this.storage.get('search');
    console.log(recents);

    if (recents) {

      if (recents.length > 5) {
        this.recents = recents.slice((recents.length - 5), recents.length);
      } else {
        this.recents = recents;
      }

    }
  }

  async searchText(event) {
    this.recents.push(event?.target?.value ?? event);
    if (this.recents.length > 5)
    this.recents = this.recents.slice((this.recents.length - 5), this.recents.length);
    this.storage.set('search', this.recents);
    this.searchName = event?.target?.value ?? event;

    this.loading = true;
    this.locale = await this.storage.get('locale');
    this.http.get('help/products', {}).subscribe({
      next: (data : any) => {
        this.products = data.filter(item => item.city == this.locale.city).filter(item => item.state == this.locale.state);
        this.products = this.products.filter(item => item.nome.toLocaleLowerCase() == this.searchName.toLocaleLowerCase());
        this.loading = false;
      },
      error: error => {
        this.loading = false;
      }
    });
  }

  searchCategory(event) {
    this.searchName = event;
  }

  onClear() {
    this.searchName = null;
    this.searchCat = null;
  }

  open (id) {
    localStorage.setItem('animalOpened', id);
    this.router.navigate(['/animal/']);
  }
}
