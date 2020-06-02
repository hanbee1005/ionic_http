import { Component } from '@angular/core';

import { ApiHttpService } from '../api-http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataArray;

  constructor(private http: ApiHttpService) {}

  getData() {
    this.http.get().then(data => {
      console.log(data.data); // data received by server
      this.dataArray = JSON.parse(data.data);
    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }

}
