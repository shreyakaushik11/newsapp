import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trend',
  templateUrl: 'trend.html',
})
export class TrendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, private iab:InAppBrowser) {
  }
   data={};
   i;
  url='https://newsapi.org/v2/top-headlines?country=in&apiKey=7c48c5e4372b458682302a0b9fdd44d8';
  ionViewDidLoad() {
    this.http.get(this.url).subscribe(data => {
        this.data = data;     
      console.log(data);
    }, err => {
      console.log(err);
      
    });
  
  }
  inapp(i){
    console.log(i)
    const options: InAppBrowserOptions = {
      zoom : 'no'
    }
    const browser = this.iab.create(i.url,'_self', options);
    // browser.open();
  }


}
