import { InAppBrowser , InAppBrowserOptions} from '@ionic-native/in-app-browser';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-news',
  templateUrl: 'all-news.html',
})
export class AllNewsPage {
   
  data={};
  i;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, private iab: InAppBrowser) {
  }
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
  