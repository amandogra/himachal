import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RadioPage } from '../radio/radio';
import { CityDetailPage } from '../city-detail/city-detail';
import { CityListPage } from '../city-list/city-list';
import { CityData } from '../../providers/city-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    //@ViewChild('scheduleList', { read: List }) scheduleList: List;
  cities: Array<{name: string, slug: string, district: string, thumbnail: string}>;

  constructor(public navCtrl: NavController, public cityData: CityData) {

      console.log(this.cities);
    //TODO: this should come from service.
    this.cities = []; //cityData.cities;
  }


  searchButtonClicked(event) {
      this.navCtrl.push(CityListPage);
  }

  radioButtonClicked(event) {
      this.navCtrl.push(RadioPage);
  }

  thumbnailTapped($event, city) {
      this.navCtrl.push(CityDetailPage, {
          city: city
      });
  }
}
