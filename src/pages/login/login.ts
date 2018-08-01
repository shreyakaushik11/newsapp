import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public userProfile:any = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user);
        this.userProfile = user;
      } else {
        console.log("There's no user here");
      }
  });
}

  
  // fbLogin(){
  //   this.facebook.login(['email']).then(res=>{
  //     const fc=firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
  //     firebase.auth().signInWithCredential(fc).then(fs=>{
  //       alert("firebase sec");
  //     }).catch(ferr=>{
  //       alert("firebase error");
  //     });
  //   }).catch(err=>{
  //     alert(JSON.stringify(err))
  //   })
   
  googleLogin():void {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithRedirect(provider).then( () => {
      firebase.auth().getRedirectResult().then( result => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user);
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message)
      })
    }).catch(function(error) {
      // Handle Errors here.
      console.log(error.message)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
 