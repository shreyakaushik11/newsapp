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
  data;
  img;
  i;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {}
  
url='https://newsapi.org/v2/top-headlines?country=in&apiKey=7c48c5e4372b458682302a0b9fdd44d8';
  ionViewDidLoad(){}
  }
  // getdata(){

  //     this.http.get(this.url).subscribe(data => {
  //       for(this.i=0;this.i<data.articles.length;this.i++)
  //       {
  //         this.data = data;
  //       this.title=data.articles[this.i].title;
  //       this.img=data.articles[this.i].urlToImage;
  //       console.log(data);
  //       console.log(this.title);
  //       console.log(this.img)
  //     }
  //     }, err => {
  //       console.log(err);
        
  //     });
    
    
  
   
      
      
     
  //   }}

  

