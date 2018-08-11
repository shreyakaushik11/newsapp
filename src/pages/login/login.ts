import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
// import { auth } from 'firebase';
// import { map } from 'rxjs/operators';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface User { displayName:string, photoUrl:string, email:string, interests:['']};

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData:User = {displayName:'',photoUrl:'', email:'', interests:['']} 
  displayName;
  email;
  photoUrl;
  public userProfile:any = null;
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private facebook: Facebook, private afs: AngularFirestore) {
    this.userCollection = afs.collection<User>('users');
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        // this.displayName = user.displayName;
        // this.email = user.email;
        // this.photoUrl = user.photoURL;
        this.userData.displayName=user.displayName;
        this.userData.email=user.email;
        this.userData.photoUrl=user.photoURL;
        // console.log(this.displayName);
        // console.log(this.email);
        // console.log(this.photoUrl);
        this.userProfile = user;
        console.log(this.userProfile);
        // this.userCollection.add(this.userData)

        this.userCollection.doc(this.userData.email).set(this.userData)

      } else {
        console.log("There's no user here");
      }
  });
  // this.userCollection.add(this.email)
}
facebookLogin(): Promise<any> {
  return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential)
        .then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
        });

    }).catch((error) => { console.log(error) });
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
  
  // addUser(){
  //   this.userCollection.doc(this.email).set(this.userInfo);

  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
 