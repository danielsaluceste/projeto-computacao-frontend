import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  public animal: any = [];
  public loading: boolean = true;
  public id: string;

  public userID: string;

  public os;

  constructor(public http: HttpClient, private route: Router, public storage: Storage, public plataform: Platform) { }

  async ngOnInit() {

    if (this.plataform.is('ios') && this.plataform.is('capacitor')) {
      this.os = 'ios';
    } else if (this.plataform.is('android') && this.plataform.is('capacitor')) {
      this.os = 'android';
    } else {
      this.os = 'web';
    }

    this.userID = await this.storage.get('userID');

    this.id = localStorage.getItem('animalOpened');
    console.log(this.id);

    this.http.get('help/products/' + this.id).subscribe({
      next: (data: any) => {
        this.animal = data;
        console.log(this.animal);
        this.loading = false;
      },
      error: error => {
        this.loading = false;
      }
    });

  }

  transform(value:string): string {
    let first = value.substr(0,1).toUpperCase();
    return first + value.substr(1); 
  }

  chat() {
    localStorage.setItem('chat', this.animal.user);
    // this.route.navigate(['/message']);
    this.openLink('https://api.whatsapp.com/send?phone=55' + this.animal.user.telefone.replace(/\D/g, ''));
  }

  openLink(link) {
    window.open(link, '_system');
  }

}
