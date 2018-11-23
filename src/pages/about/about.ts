import { DataProvider } from './../../providers/data/data';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  user;
  constructor(public navCtrl: NavController, public data: DataProvider, public navParams: NavParams, private nativeStorage:NativeStorage) {
  }

  ionViewDidLoad() {
    console.log(this.data.photo);
    console.log(this.data.name);
    // this.nativeStorage.getItem('user').then((user) => {
    //   console.log("this is name: " + user.name);
    //   console.log("this is picture url: " + user.picture);
  
    console.log('ionViewDidLoad AboutPage');
  }

}
