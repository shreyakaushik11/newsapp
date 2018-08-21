import { AboutPage } from './../about/about';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import {ForYouPage} from '../for-you/for-you'
import {VideosPage} from '../videos/videos';
import {TrendingPage} from '../trending/trending';
import {HttpClient} from '@angular/common/http';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage { 

  pages=[
    
  {pageName:ForYouPage,title:"For You", icon:"heart"},
  {pageName:TrendingPage, title:"Trending" ,icon:"trending-up"},
  {pageName: VideosPage,title:"All News",icon:"videocam"}
  
];
selectedTab=0;
  @ViewChild(SuperTabs) SuperTabs: SuperTabs;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  onTabSelect(ev:any){
    this.selectedTab=ev.index
  }
 
 nextPage(){
   this.navCtrl.push(AboutPage);
 }
 

}
