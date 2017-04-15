import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CityListPage } from '../pages/city-list/city-list';
import { RadioPage } from '../pages/radio/radio';
import { CityDetailPage } from '../pages/city-detail/city-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CityData } from '../providers/city-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RadioPage,
    CityDetailPage,
    CityListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RadioPage,
    CityDetailPage,
    CityListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CityData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
