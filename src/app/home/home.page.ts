import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any;

  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.api.get_data('posts').then((data) => {
      this.posts = data;
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

}
