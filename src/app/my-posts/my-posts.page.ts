import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.page.html',
  styleUrls: ['./my-posts.page.scss'],
})
export class MyPostsPage implements OnInit {

  public products: any = [];
  public loading: boolean = true;
  public userID: string;

  constructor(public http: HttpClient, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.http.get('help/products', {}).subscribe({
      next: (data : any) => {
        this.products = data;
        this.loading = false;
      },
      error: error => {
        this.loading = false;
      }
    });
  }

  async open(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ações',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Deletar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          this.delete(id);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
  }

  delete (id) {
    this.http.delete('help/products/' + id).subscribe({
      next: (data : any) => {
        this.ngOnInit();
      },
      error: error => {
        console.log("Delete error!");
      }
    });
  }

}
