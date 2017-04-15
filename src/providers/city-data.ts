import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class CityData {
  data: any;

  constructor(public http: Http) { }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      var dataJson = this.http.get('assets/data/data.json');
      console.log(dataJson)
      return dataJson.map(this.processData, this);
    }
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data.json();

    return this.data;
  }

  //getSpeakers() {
    //return this.load().map((data: any) => {
      //return data.speakers.sort((a: any, b: any) => {
        //let aName = a.name.split(' ').pop();
        //let bName = b.name.split(' ').pop();
        //return aName.localeCompare(bName);
      //});
    //});
  //}

}
