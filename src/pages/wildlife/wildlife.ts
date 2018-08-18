import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';
/**
 * Generated class for the TrendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wildlife',
  templateUrl: 'wildlife.html',
})
export class WildlifePage {
  data={};
 i;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
  }
  url='https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=7c48c5e4372b458682302a0b9fdd44d8';
  ionViewDidLoad() {
    this.http.get(this.url).subscribe(data => {
  
        this.data = data;
       
      
      console.log(data);

    
    }, err => {
      console.log(err);
      
    });
  
  }}

 
    
    
   
  
  


