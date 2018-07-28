import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InterestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-interests',
  templateUrl: 'interests.html',
})
export class InterestsPage {
  // interest={name:["Wildlife"], status:false, images:["", "", "../../assets/imgs/entertainment.jpg", "../../assets/imgs/technology.jpg"]};
  interest = [{name:"Wildlife", image:"../../assets/imgs/wildlife.jpg", status:false}, {name:"Business", image:"../../assets/imgs/business.jpg", status:false},{name:"Entertainment", image:"../../assets/imgs/entertainment.jpg", status:false}, {name:"Technology", image:"../../assets/imgs/technology.jpg", status:false}]
  
  interest2 = [{name:"General", image:"../../assets/imgs/general.jpg", status:false}, {name:"Health", image:"../../assets/imgs/health.jpg", status:false},{name:"Science", image:"../../assets/imgs/science.jpg", status:false}, {name:"Sports", image:"../../assets/imgs/sports.jpg", status:false}]

  
  imgs=["../../assets/imgs/general.jpg", "../../assets/imgs/health.jpg", "../../assets/imgs/science.jpg", "../../assets/imgs/sports.jpg"]
  interests=["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology", "Wildlife"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestsPage');
  }
toggle(i){
  i.status=!i.status;
  console.log(i);
}

}
