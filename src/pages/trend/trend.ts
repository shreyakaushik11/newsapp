import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
   url='https://newsapi.org/v2/everything?q=bitcoin&apiKey=f78729cd63a2418bb648a26a3a6a3af9';
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
