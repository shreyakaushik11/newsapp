import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AboutPage } from '../about/about';


@IonicPage()
@Component({
  selector: 'page-foryou',
  templateUrl: 'foryou.html',
})
export class ForyouPage {
  data={};
  i;
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private http: HttpClient) {
  }
  url='https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f78729cd63a2418bb648a26a3a6a3af9';
  ionViewDidLoad() {
    this.http.get(this.url).subscribe(data => {
        this.data = data;
      // for(this.i=0;this.i<data['articles'].length;this.i++)
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
  nextPage(){
    this.navCtrl.push(AboutPage);
  }
}
