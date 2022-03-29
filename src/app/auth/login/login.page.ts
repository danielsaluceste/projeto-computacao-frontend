import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(public http: HttpClient, private formBuilder: FormBuilder, public toastController: ToastController, private userService: UserService, public router: Router, public storage: Storage) {

    this.form = this.formBuilder.group({
      login: [],
      password: [],
    })
  }

  ngOnInit() {
  }

  login() {
    var login = this.form.value.login.replace(/[^a-zA-Z0-9]/g, '');

    console.log(login);

    this.userService.login(login, this.form.value.password).then((data) => {
      window.location.reload();
    }).catch((error) => {
      this.presentToastWithOptions();
    });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'CPF e/ou senha incorretos, verifique os dados e tente novamente!',
      icon: 'information-circle',
      position: 'bottom',
      mode: 'ios',
      color: 'danger',
      duration: 20000,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();
  }

}
