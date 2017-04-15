import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CityDetailPage } from '../city-detail/city-detail';

@Component({
  selector: 'page-city-list',
  templateUrl: 'city-list.html'
})
export class CityListPage {
  selectedCity: any;
  icons: string[];
  cities: Array<{name: string, slug: string, district: string, thumbnail: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedCity = navParams.get('city');

    //seed data for cities. TODO: This will come from the service later
    this.cities = [
        {
            name: "Hamirpur",
            slug: "hamirpur",
            district: "hamirpur",
            thumbnail: "default.jpg"
        },
        {
            name: "Kangra",
            slug: "kangra",
            district: "kangra",
            thumbnail: "kangra.jpg"
        },
        {
            name: "Dharamsala",
            slug: "dharamsala",
            district: "kangra",
            thumbnail: "dharamsala.jpg"
        },
        {
            name: "Kullu",
            slug: "kullu",
            district: "kullu",
            thumbnail: "default.jpg"
        },
        {
            name: "Shimla",
            slug: "simla",
            district: "simla",
            thumbnail: "simla.jpg"
        },
        {
            name: "Solan",
            slug: "solan",
            district: "solan",
            thumbnail: "default.jpg"
        },
        {
            name: "Manali",
            slug: "manali",
            district: "manali",
            thumbnail: "manali.jpg"
        }
    ];
  }

  itemTapped(event, city) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CityDetailPage, {
      city: city
    });
  }
}
