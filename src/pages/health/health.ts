import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';

/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {
  data;
  i;
  url='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7c48c5e4372b458682302a0b9fdd44d8';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, public data:DataProvider) {
  }

  ionViewDidLoad() {
    this.http.get(this.url).subscribe(data => {
      for(this.i=0;this.i<data['articles'].length;this.i++)
      {
        this.data = data;
       
      
      console.log(data);

     
    }
    }, err => {
      console.log(err);
      
    });
    console.log('ionViewDidLoad HealthPage');
  }
  nextPage(){
    this.navCtrl.push(AboutPage);
  }

}
