import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-primary-tabs-module',
  templateUrl: 'primary-tabs-module.html'
})
export class PrimaryTabsModulePage {

  foryouRoot = 'ForyouPage'
  trendRoot = 'TrendPage'
  allNewsRoot = 'AllNewsPage'
  constructor(public navCtrl: NavController) {
}
nextPage(){
  this.navCtrl.push(AboutPage);
}
}
