import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://18.191.197.11/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getMovies() {
    return new Promise(resolve => {
      console.log(this.apiUrl + '/movies');
      this.http.get(this.apiUrl+'/movies').subscribe(data => {
        console.log("here");
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  } 

}
