import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }
  nextPage(){
    this.navCtrl.push(AboutPage);
  }
}
