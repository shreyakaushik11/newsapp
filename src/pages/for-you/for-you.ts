import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';

/**
 * Generated class for the ForYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-for-you',
  templateUrl: 'for-you.html',
  providers:[DataProvider]
})
export class ForYouPage {
  title;
  data1;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public data:DataProvider) {}
  
url='https://newsapi.org/v2/top-headlines?country=in&apiKey=7c48c5e4372b458682302a0b9fdd44d8';
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForYouPage');
  }
  getdata(){

      this.http.get(this.url).subscribe(data => {
        this.title=data.articles[0].title;
        console.log(data);
        //this.title=JSON.parse(JSON.stringify(data.articles[0]));
    
      }, err => {
        console.log(err);
        
      });
    
    
  
   
      
      
     
    }}
  

