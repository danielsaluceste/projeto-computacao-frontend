import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(public http: HttpClient, private formBuilder: FormBuilder, public toastController: ToastController, private userService: UserService, public router: Router) {

    this.form = this.formBuilder.group({
      name: [],
      email: [],
      phone: [],
      cpf: [],
      date: [],
      password: [],
    })
  }

  ngOnInit() {
  }

  register() {
    this.http.post('help/users/register', {
      nome: this.form.value.name,
      email: this.form.value.email,
      telefone: this.form.value.phone,
      cpf: this.form.value.cpf,
      nascimento: this.form.value.date,
      senha: this.form.value.password,
    }).subscribe({
      next: (data : any) => {
        this.userService.login(data.cpf, data.password).then((data) => {
          this.router.navigate(['/tabs']);
        });
      },
      error: error => {
        this.presentToastWithOptions();
      }
    });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Ocorreu algum erro, verifique os dados e tente novamente!',
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
