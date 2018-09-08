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
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage:NativeStorage) {
  }

  ionViewDidLoad() {
    
    this.nativeStorage.getItem('user').then((user) => {
      console.log("this is email: " + user.email);
      console.log("this is password: " + user.pasword);
  })
    console.log('ionViewDidLoad AboutPage');
  }

}
