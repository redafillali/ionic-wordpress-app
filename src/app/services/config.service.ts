import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  siteinfo: any = {};
  url: any;

  constructor() {
    // No slash at the end of the url
    this.url = 'https://www.medecinealternative.ma';
  }

  async setUrl(method, endpoint, filter = {}) {
    let key;
    const ordered = {};
    if (this.url.indexOf('https') >= 0) {
        return this.url + '/wp-json/wp/v2/' + endpoint;
    }
    else {
        var url = this.url + '/wp-json/wp/v2/' + endpoint;
        return this.url + '/wp-json/wp/v2/' + endpoint;
    }
}
}