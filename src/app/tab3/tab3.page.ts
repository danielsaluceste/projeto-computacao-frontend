import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public user : any = [];

  constructor(private storage: Storage) {}

  logout() {
    this.storage.set('logado', 'false');
    window.location.reload();
  }

  async ngOnInit () {
    this.user = await this.storage.get('user');
  }

}
