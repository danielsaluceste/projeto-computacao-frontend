import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  public animal: any = [];
  public loading: boolean = true;
  public id: string;

  constructor(public http: HttpClient, private route: ActivatedRoute,) { }

  ngOnInit() {

    this.id = localStorage.getItem('animalOpened');
    console.log(this.id);

    this.http.get('help/products/' + this.id).subscribe({
      next: (data: any) => {
        this.animal = data;
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

}
