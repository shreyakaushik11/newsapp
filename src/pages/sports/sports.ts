import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';

/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {
  data;
  i;
  url='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7c48c5e4372b458682302a0b9fdd44d8';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, public data:DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }
  nextPage(){
    this.navCtrl.push(AboutPage);
  }

}
