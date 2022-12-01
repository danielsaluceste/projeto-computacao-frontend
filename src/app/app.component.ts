import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storage: Storage, public http: HttpClient) {
    this.storage.create();
  }

  async ngOnInit() {
    var token = await this.storage.get('token');

    if (await this.storage.get('logado') == true)
    this.http.get('help/users', { headers: {token: token} }).subscribe({
      next: (data : any) => {
        this.storage.set('user', data);
        this.storage.set('userID', data._id);
      },
      error: error => {
        this.storage.set('logado', false);
        window.location.reload();
      }
    });
  }

}
