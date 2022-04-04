import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ConfigService } from './config.service';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  result: any;
  error: any;
  options: any = {};


  constructor(
    public config: ConfigService,
    public httpClient: HttpClient,
    public platform: Platform,
  ) { }

  get_data(endPoint, filter = {}) {
    const url = this.config.setUrl('GET', endPoint + '/', filter);

        return new Promise(async (resolve, reject) => {
            this.httpClient.get(await url).pipe(map((res: any) => res)).subscribe(data => {
                resolve(data);
            }, err => {
                // this.presentAlert(err.error);
                reject(err.error);
            });
        });
  }

  async get_category_name_by_id(id) {
    const url = this.config.setUrl('GET', 'categories/', id);
    this.httpClient.get(await url).pipe(map((res: any) => res)).subscribe(data => {
        return data.name;
    }, err => {
        // this.presentAlert(err.error);
        console.log(err);
    });
  }
}
