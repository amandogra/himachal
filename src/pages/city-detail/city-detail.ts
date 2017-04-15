import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-city-detail',
  templateUrl: 'city-detail.html'
})
export class CityDetailPage {
    city: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.city = navParams.get('city');
  }
}
