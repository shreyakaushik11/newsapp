import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the TrendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
  // providers:[DataProvider]

})
export class EntertainmentPage {
  data: any={};
 i;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, private iab: InAppBrowser) {
  }
  url='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f78729cd63a2418bb648a26a3a6a3af9';
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
    const browser = this.iab.create(i.url,'_self',{location:'no'});
    // browser.open();
  }
}

 
    
    
   
  
  


