import { Injectable } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  apiUrl = 'https://api.github.com/users';

  constructor(private http: HTTP) { }

  get() {
    return this.http.get(this.apiUrl, {}, {});
  }
}
