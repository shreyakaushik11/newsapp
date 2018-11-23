import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PrimaryTabsModulePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-primary-tabs-module',
  templateUrl: 'primary-tabs-module.html'
})
export class PrimaryTabsModulePage {

  foryouRoot = 'ForyouPage'
  trendRoot = 'TrendPage'
  allNewsRoot = 'AllNewsPage'


  constructor(public navCtrl: NavController) {}

}
