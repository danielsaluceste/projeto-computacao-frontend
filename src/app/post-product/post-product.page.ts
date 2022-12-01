import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../user.service';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileTransfer, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.page.html',
  styleUrls: ['./post-product.page.scss'],
})
export class PostProductPage implements OnInit {

  @ViewChild("money") money;
  @ViewChild('fileButton', { static: false }) fileButton;

  imageURL: any;

  public loaing = false;

  form: FormGroup;

  public os;

  constructor(public http: HttpClient, public plataform: Platform, private formBuilder: FormBuilder, public toastController: ToastController, private userService: UserService, public router: Router, public storage: Storage, private file: File, private transfer: FileTransfer) {

    this.form = this.formBuilder.group({
      name: [''],
      description: [''],
      porte: [''],
      idade: ['']
    })
  }

  ngOnInit() {
    if (this.plataform.is('ios') && this.plataform.is('capacitor')) {
      this.os = 'ios';
    } else if (this.plataform.is('android') && this.plataform.is('capacitor')) {
      this.os = 'android';
    } else {
      this.os = 'web';
    }
  }

  async post() {
    var token = await this.storage.get('token')
    var locale = await this.storage.get('locale')

    this.http.post('help/products', {
      nome: this.form.value.name,
      descricao: this.form.value.description,
      porte: this.form.value.porte,
      idade: this.form.value.idade,
      foto: this.imageURL,
      city: locale.city,
      state: locale.state,
      token: token
    }).subscribe({
      next: (data: any) => {
        this.presentToastWithOptions();
        this.router.navigate(['/tabs/tab1']);
      },
      error: error => {

      }
    });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Animal colocado para adoção com sucesso!',
      icon: 'information-circle',
      position: 'bottom',
      mode: 'ios',
      color: 'success',
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

  uploadPhoto() {

    this.fileButton.nativeElement.click();

    const fileTransfer: FileTransferObject = this.transfer.create();

  }

  fileChanged(event) {
    this.loaing = true;

    const files = event.target.files;
    console.log(files);
    const reader = getFileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
      this.loaing = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

}

export function getFileReader(): FileReader {
  const fileReader = new FileReader();
  const zoneOriginalInstance = (fileReader as any).__zone_symbol__originalInstance;
  return zoneOriginalInstance || fileReader;
}
const newInstance = getFileReader();