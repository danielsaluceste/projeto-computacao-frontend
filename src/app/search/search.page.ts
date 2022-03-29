import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public recents: any = [];
  public categories: any = ['teste1', 'teste2', 'teste3', 'teste4', 'teste5', 'teste6', 'teste7', 'teste8', 'teste9', 'teste10'];

  constructor(private storage: Storage) {  }

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

  search(event) {
    this.recents.push(event.target.value);
    if (this.recents.length > 5)
    this.recents = this.recents.slice((this.recents.length - 5), this.recents.length);
    this.storage.set('search', this.recents);
  }

}
