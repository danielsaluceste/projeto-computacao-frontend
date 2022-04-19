import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, private storage: Storage) { }

  public login(login: string, password: string) : Promise<any> {
    return new Promise((resolve, reject) => {

      this.http.post('help/users/login', {
        login: login,
        password: password
      }).subscribe({
        next: (data: any) => {
          this.storage.set('token', data.token);
          this.storage.set('logado', true);
          resolve(data);
        },
        error: error => {
          reject('Login ou senha incorretos');
        }
      });

    });
  }

}
